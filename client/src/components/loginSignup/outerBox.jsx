
import css from "./SignInCreateAcc.module.css"

export const OuterBox = ({ title, children }) => {


    return <div className={css.mainContainer}>
        <div className={css.subContainer}>
            <h2 className={css.title}>{title} </h2>
            {children}
        </div>
    </div>
}