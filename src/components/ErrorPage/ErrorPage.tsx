import styles from "./ErrorPage.module.css"
import {NavLink} from "react-router-dom";
import errorImage from "./../../assets/images/404.jpg";

const ErrorPage = () => {
    return (
        <section className={"container"}>
            <h2 className={styles.title}>
                <span>404</span> error
            </h2>
            <article className={"errorPage " + styles.content}>
                <div>
                    <p>Страница не найдена</p>
                    <p>Кажется что-то пошло не так...</p>
                    <p>
                        Пожалуйста, вернитесь на <NavLink to="/">главную</NavLink>
                    </p>
                </div>
                <div>
                    <img src={errorImage} alt="Страница не найдена"/>
                </div>
            </article>
        </section>
    )
}

export default ErrorPage;