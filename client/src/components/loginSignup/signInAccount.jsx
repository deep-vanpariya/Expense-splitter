import { useEffect, useRef } from "react"
import { User, LockIcon } from "lucide-react"
import { OuterBox } from "./outerBox"
import { signin } from "../../api/user-api"


export const SignIn = () => {
    const userNameRef = useRef(null);
    const passWordRef = useRef(null);

    useEffect(() => userNameRef.current && userNameRef.current.focus(), []);

    const onSubmit = async (event) => {
        event.preventDefault()
        console.log(`userName = ${userNameRef.current.value}\npassWordRef = ${passWordRef.current.value}`)
        const result = await signin({ username: userNameRef.current.value, password: passWordRef.current.value });
        if (result.success) {
            window.location.href = "http://localhost:5173/home";
        }
        else { alert("Signin Fail") }
    }
    return <OuterBox title={"Sign In"} linkText={"Don't Have Account?"} onSubmit={onSubmit} submitButtonText={"Signin"} route={"createacc"} >

        <div>
            <User color="#2c2c2c" strokeWidth={1.5} />
            <input type="text" ref={userNameRef} placeholder="Username" name="username" autoComplete="username" required />
        </div>
        <div>
            <LockIcon color="#2c2c2c" strokeWidth={1.5} />
            <input type="password" ref={passWordRef} placeholder="PassWord" name="password" autoComplete="current-password" required minLength="8" />
        </div>

    </OuterBox>
}