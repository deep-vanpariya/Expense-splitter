import { checkJWT } from "../utils/jwtManager.js";

export const checkToken = (req, res, next) => {

    const token = req.headers["authorization"];
    if (!token) return res.status(411).json({ msg: "Token not found!!!!" });

    const checkResult = checkJWT({ token });
    if (checkResult.success == false) return res.status(401).json({ msg: "Token not valid" });

    req._data = checkResult.data
    next()
}
