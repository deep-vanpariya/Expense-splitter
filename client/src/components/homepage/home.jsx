import { useEffect } from "react"
import { CreateGroupButton } from "./createGroupButton" 
import { readCookie } from "../../lib/tokemManager"
import { CreatedGroups } from "../CreateGroup/createdGroups"


const HomePage = () => {
    useEffect(() => {
        const token = readCookie({ cookieName: "token" })
        if (token == false) window.location.href = "http://localhost:5173/signin";
    }, [])
    return <div className="w-full flex flex-col gap-3 bg-fuchsia-200">Home Page
        <CreateGroupButton />
    </div>
}
export { HomePage }