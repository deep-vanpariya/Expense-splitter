import { useEffect, useRef } from "react";
import css from "./SignInCreateAcc.module.css"
import { UserSvg, EmailSvg, PassWordSvg } from "../../assets/svgFile"
import { OuterBox } from "./outerBox";

export const CreateAccount = () => {
    const userNameRef = useRef(null);
    const emailRef = useRef(null);
    const passWordRef = useRef(null);


    useEffect(() => userNameRef.current && userNameRef.current.focus(), []);
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(`userName = ${userNameRef.current.value}\nemail = ${emailRef.current.value}\npassWordRef = ${passWordRef.current.value}`)
    }

    return <OuterBox title={"Create Account"} linkText={"Already Have Account?"} onSubmit={onSubmit} route={"signin"} submitButtonText={"Create"}>

        <div>
            <UserSvg c={"#2c2c2c"} />
            <input type="text" ref={userNameRef} placeholder="Username" name="username" autoComplete="username" required />
        </div>
        <div>
            <EmailSvg c={"#2C2C2C"} />
            <input ref={emailRef} placeholder="E-mail" required name="email" autoComplete="email" />
        </div>
        <div>
            <PassWordSvg c={"#2c2c2c"} />
            <input ref={passWordRef} placeholder="PassWord" required minLength="8" name="password" autoComplete="current-password" />
        </div>

    </OuterBox>
}