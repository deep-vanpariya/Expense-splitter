import css from "./creategroup.module.css"

export const CreateGroupButton = () => {

    return <div className={css.mainDiv}>
        <button onClick={() => { window.location.href = "http://localhost:5173/creategrp" }}>
            Create New Group
        </button>

    </div>
}