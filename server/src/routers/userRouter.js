import { Router } from "express"
import { signInSchema, signUpSchema } from "../schemaValidator.js"
import { createUser, getSingleUser } from "../database/userQueryes.js";
import { checkPassword, makePasswordencrypt } from "../utils/passwordManager.js";
import { generateJWT } from "../utils/jwtManager.js";

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {

    const { username, email, password } = req.body;
    if (!username || !email || !password) return res.status(400).send("Invalid body elements");

    const verified = signUpSchema({ username, email, password });
    if (verified == false) return res.status(422).send("Invalid format!!!!");
    //we can use !verified 

    const encryption = await makePasswordencrypt({ password })
    if (encryption.success == false) return res.status(500).json({ msg: "Pass encryption Fail!!", Error: encryption.error })

    const result = await createUser({ email, username, encryptPass: encryption.hash })
    if (result.success == false) return res.status(500).json({ msg: "DB ERROR!!", Error: result.error })

    return res.json(result)
})

userRouter.post("/signin", async (req, res) => {

    const { username, password } = req.body;

    if (!username || !password) return res.status(422).json({ msg: "Invalid body!!!!" });

    const verified = signInSchema({ username, password })
    if (verified == false) return res.status(422).json({ msg: "Invalid format!!!!" });

    const result = await getSingleUser({ username })
    if (result.success == false) return res.status(500).json({ msg: "DB ERROR!!", Error: result.error })

    const checkResult = await checkPassword({ bodyPassword: password, dbPassword: result.data.password })
    if (checkResult.success == false) return res.status(401).json({ msg: "Password Not Valid", error: checkResult.error });

    const generateResult = generateJWT({ userid: result.data.id })
    if (!generateResult.success) return res.status(500).json({ msg: "Error On JWT creation!!", error: generateResult.error });

    return res.json({
        msg: "Password Correct",
        token: generateResult.token
    })
})

export { userRouter }