import { Link } from "react-router-dom";
import logo from "./../../assets/images/small-logo.png";
import styles from "./Footer.module.css";

const Footer = () => {

    let currentYear = new Date().getFullYear();

    return (
        <footer className={"footer " + styles.footer}>
            <div className={styles.footerColumn}>
                <img src={logo} alt="Логотип" />
                <Link to="tel:+79626849473">
                    +7 (962) 684-94-73
                </Link>
                <Link to="mailto:zakaz@petroplast.ru">
                    zakaz@petroplast.ru
                </Link>
                <Link to="mailto:office@petroplast.ru">
                    office@petroplast.ru
                </Link>
            </div>
            <div className={styles.underRow}>
                <Link to="https://yandex.ru/maps/102557/sestroretsk/house/ulitsa_voskova_2ats/ZkAYfwFkTUQGQFhqfXx4dnlnZw==/?ll=29.964544%2C60.097642&z=19">
                    Санкт-Петербург, г. Сестрорецк, ул. Воскова, д. 2 лит. Т
                </Link>
                <div>
                    1998–{currentYear} Официальный сайт. Все права защищены.
                </div>
                <Link to="/">
                    Политика конфиденциальности
                </Link>
            </div>
        </footer>
    )
}

export default Footer;