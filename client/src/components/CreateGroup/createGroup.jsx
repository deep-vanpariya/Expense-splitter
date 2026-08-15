import { useEffect, useRef, useState } from "react"
import css from "./createGroup.module.css"
import { User2 } from "lucide-react"
import { createGroup } from "../../api/group_api"
import { readCookie } from "../../lib/tokemManager"
import { CreatedGroups } from "./createdGroups"

export const CreateGroup = () => {
    const inputRef = useRef(null)
    const [showCreatedConf, setShowCreatedConf] = useState(false)
    const [createSuccess, setCreateSuccess] = useState(false)
    const [refreshChild, setRefreshChild] = useState(false);
    const handleConf = ({ success }) => {
        setShowCreatedConf(true);

        if (success) setCreateSuccess(true);
        else setCreateSuccess(false);

        setTimeout(() => {
            setShowCreatedConf(false)
        }, 2000)
    }

    const clickHandler = () => {
        const groupname = inputRef.current.value;
        createGroup({ groupname }).then((res) => {
            console.log(res)
            setRefreshChild(val => !val)
            handleConf({ success: true })
        }).catch((err) => {
            console.log(err)
            handleConf({ success: false })
        })

    }
    useEffect(() => {
        const token = readCookie({ cookieName: "token" })
        if (token == false) window.location.href = "http://localhost:5173/signin";
    }, [])
    return <div className={css.create_group}>
        <div className={css.create_group_avatar}>
            <div className={css.create_group_avatar_inner} >
                <User2 height={50} width={50} strokeWidth={1.3} />
            </div>
        </div>

        <div className={css.create_group_form}>
            <input ref={inputRef} placeholder="Group name" className={css.create_group_input}></input>
            <button onClick={clickHandler} className={css.create_group_button}>Create</button>

            {showCreatedConf ?
                createSuccess ? (< p className={css.create_group_form_created}>Group created</p>)
                    : (< p className={css.create_group_form_notCreated}>Not created</p>) : <></>}
        </div>

        <CreatedGroups refresh={refreshChild} />
    </div >
}