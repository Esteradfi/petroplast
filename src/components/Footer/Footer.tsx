import { Link } from "react-router-dom";
import logo from "./../../assets/images/small-logo.jpg";
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
                <Link to="https://yandex.ru/maps/102557/sestroretsk/?ll=29.964544%2C60.097642&mode=poi&poi%5Bpoint%5D=29.964406%2C60.097590&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1073073345&z=19">
                    Санкт-Петербург, г. Сестрорецк, ул. Воскова, д. 2 лит. Т
                </Link>
                <div>
                    1998–{currentYear} Официальный сайт. Все права защищены.
                </div>
                <Link to="/politika-konfidencialnosti">
                    Политика конфиденциальности
                </Link>
            </div>
        </footer>
    )
}

export default Footer;