import { Link } from "react-router-dom";
import burger from "./../../assets/icons/burger.svg";
import location from "./../../assets/icons/location.svg";
import phone from "./../../assets/icons/phone.svg";
import search from "./../../assets/icons/search.svg";
import workTime from "./../../assets/icons/workTime.svg";
import logo from "./../../assets/images/logo.png";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.upperRow}>
                <div className={"container " + styles.content}>
                    <div className={styles.item}>
                        <img className={styles.icon} src={workTime} alt="Время работы" />
                        <span>
                            пн-пт 9.00-18.00
                        </span>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.icon} src={location} alt=" Адрес" />
                        <Link to="https://yandex.ru/maps/102557/sestroretsk/house/ulitsa_voskova_2ats/ZkAYfwFkTUQGQFhqfXx4dnlnZw==/?ll=29.964544%2C60.097642&z=19">
                            Санкт-Петербург, г. Сестрорецк, ул. Воскова, д. 2 лит. Т
                        </Link>
                    </div>
                </div>
            </div>
            <div className={"container " + styles.middleRow}>
                <span className={styles.item}>
                    Производство и оптовая продажа хозяйственных товаров
                </span>
                <img className={styles.item} src={logo} alt="Логотип" />
                <div className={styles.item}>
                    <div className={styles.link}>
                        <img src={phone} alt="Телефон" />
                        <Link to="tel:+79626849473">
                            +7 962 684 94 73
                        </Link>
                    </div>
                    <Link to="mailto:office@petroplast.ru">
                        office@petroplast.ru
                    </Link>
                </div>
            </div>
            <div className={"container " + styles.underRow}>
                <button className={styles.menuButton + " " + styles.item}>
                    <img src={burger} alt="Меню" />
                    <span>Каталог</span>
                </button>
                <div className={styles.searchBlock + " " + styles.item}>
                    <input className={styles.searchInput} type="text" placeholder="Поиск"/>
                    <button className={styles.searchButton}>
                        <img src={search} alt="Поиск" />
                    </button>
                </div>
                <button className={styles.queryButton + " " + styles.item}>
                    Оставить заявку
                </button>
            </div>
        </header>
    )
}

export default Header;