import { useEffect, useRef } from "react"
import css from "./SignInCreateAcc.module.css"
import { UserSvg, EmailSvg } from "../../assets/svgFile"
import { OuterBox } from "./outerBox"

export const SignIn = () => {
    const userNameRef = useRef(null);
    const passWordRef = useRef(null);

    useEffect(() => userNameRef.current && userNameRef.current.focus(), []);

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(`userName = ${userNameRef.current.value}\npassWordRef = ${passWordRef.current.value}`)
    }
    return <OuterBox title={"Sign In"} linkText={"Don't Have Account?"} onSubmit={onSubmit} submitButtonText={"Signin"} route={"createacc"} >
       
            <div>
                <UserSvg c={"#2c2c2c"} />
                <input type="text" ref={userNameRef} placeholder="Username" name="username" autoComplete="username" required />
            </div>
            <div>
                <EmailSvg c={"#2C2C2C"} />
                <input type="password" ref={passWordRef} placeholder="PassWord" name="password" autoComplete="current-password" required minLength="8" />
            </div>

    </OuterBox>
}