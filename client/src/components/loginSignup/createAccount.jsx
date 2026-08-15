import { useEffect, useRef } from "react";
import { OuterBox } from "./outerBox";
import { Mail, User, LockIcon } from "lucide-react"
import { createacc } from "../../api/user-api";

export const CreateAccount = () => {
    const userNameRef = useRef(null);
    const emailRef = useRef(null);
    const passWordRef = useRef(null);

    useEffect(() => userNameRef.current && userNameRef.current.focus(), []);

    const onSubmit = async (event) => {
        event.preventDefault()
        console.log(`userName = ${userNameRef.current.value}\nemail = ${emailRef.current.value}\npassWordRef = ${passWordRef.current.value}`)
        await createacc({
            email: emailRef.current.value,
            username: userNameRef.current.value,
            password: passWordRef.current.value
        })
    }

    return <OuterBox title={"Create Account"} linkText={"Already Have Account?"} onSubmit={onSubmit} route={"signin"} submitButtonText={"Create"}>

        <div>
            <User color="#2c2c2c" strokeWidth={1.5} />
            <input type="text" ref={userNameRef} placeholder="Username" name="username" autoComplete="username" required />
        </div>
        <div>
            <Mail color="#2c2c2c" strokeWidth={1.5} />
            <input ref={emailRef} placeholder="E-mail" required name="email" autoComplete="email" />
        </div>
        <div>
            <LockIcon color="#2c2c2c" strokeWidth={1.5} />
            <input ref={passWordRef} placeholder="PassWord" required minLength="8" name="password" autoComplete="current-password" />
        </div>

    </OuterBox>
}