import styles from "./ContactsPage.module.css";
import phone from "./../../assets/icons/navigate/phone.svg";
import mail from "./../../assets/icons/mail.svg";
import clock from "./../../assets/icons/clock.svg";
import house from "./../../assets/icons/house.svg";
import {Link, NavLink} from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";
const ContactsPage = () => {
    return (
        <section className={"container "}>
            <article className={"breadcrumbs"}>
                <NavLink to="/">
                    Меню
                </NavLink>
                <img src={arrow} alt="Стрелка"/>
                <NavLink to="/contacts">
                    Контакты
                </NavLink>
            </article>
            <article>
                <h2 className={styles.title}>
                    Контакты
                </h2>
                <div className={styles.linkBlock}>
                    <div className={styles.linkSubBlock}>
                        <img className={styles.linkIcon} src={phone} alt="Телефон"/>
                        <h3 className={styles.linkName}>
                            Телефон
                        </h3>
                    </div>
                    <p>
                        <Link to="tel:+79626849473">8-962-684-94-73</Link>
                    </p>
                </div>
                <div className={styles.linkBlock}>
                    <div className={styles.linkSubBlock}>
                        <img className={styles.linkIcon} src={mail} alt="Почта"/>
                        <h3 className={styles.linkName}>
                            Почта
                        </h3>
                    </div>
                    <p>
                        <Link className={styles.link} to="mailto:zakaz@petroplast.ru">zakaz@petroplast.ru</Link>
                    </p>
                </div>
                <div className={styles.linkBlock}>
                    <div className={styles.linkSubBlock}>
                        <img className={styles.linkIcon} src={mail} alt="Почта"/>
                        <h3 className={styles.linkName}>
                            Почта
                        </h3>
                    </div>
                    <p>
                        <Link className={styles.link} to="mailto:office@petroplast.ru">office@petroplast.ru</Link>
                    </p>
                </div>
                <div className={styles.linkBlock}>
                    <div className={styles.linkSubBlock}>
                        <img className={styles.linkIcon} src={clock} alt="Часы работы"/>
                        <h3 className={styles.linkName}>
                            Часы работы
                        </h3>
                    </div>
                    <p>
                        По будням с 9.00 до 18.00
                    </p>
                </div>
                <div className={styles.linkBlock}>
                    <div className={styles.linkSubBlock}>
                        <img className={styles.linkIcon} src={house} alt="Адрес"/>
                        <h3 className={styles.linkName}>
                            Адрес
                        </h3>
                    </div>
                    <p>
                        <Link to="https://yandex.ru/maps/102557/sestroretsk/?ll=29.964544%2C60.097642&mode=poi&poi%5Bpoint%5D=29.964406%2C60.097590&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1073073345&z=19">
                            192102, Россия, Санкт-Петербург, г. Сестрорецк, ул. Воскова, д. 2 лит. Т
                        </Link>
                    </p>
                </div>
            </article>
            <article className={styles.articleMap}>
                <h3 className={styles.title}>
                    Мы на карте
                </h3>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A02d1d7ca65afdd5f484ca39f9f3a0710d50faefddc9fa55cb4371eacd3197b1d&source=constructor&ll=29.966702%2C60.097554&mode=poi&poi%5Bpoint%5D=29.964406%2C60.097590&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1073073345&z=16.7"
                    width="100%"
                    height="450"
                    frameBorder="0"
                ></iframe>
            </article>
        </section>
    )
}

export default ContactsPage;