
import css from "./SignInCreateAcc.module.css"

export const OuterBox = ({ title, onSubmit, children, route, linkText, submitButtonText }) => {


    return <div className={css.mainContainer}>
        <div className={css.subContainer}>

            <h2 className={css.title}>{title} </h2>
            <form className={css.form} onSubmit={onSubmit}>
                {children}

                <div className={css.clickAbleGroup}>
                    <button className={css.submit} type="submit">{submitButtonText}</button>

                    <a href={route} className={css.link}>{linkText}</a>
                </div>
            </form>
        </div>
    </div>
}