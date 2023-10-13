import { Link } from "react-router-dom";
import caseImage from "./../../../assets/icons/navigate/case.svg";
import deliveryImage from "./../../../assets/icons/navigate/delivery.svg";
import discountImage from "./../../../assets/icons/navigate/discount.svg";
import documentsImage from "./../../../assets/icons/navigate/documents.svg";
import handsImage from "./../../../assets/icons/navigate/hands.svg";
import labelImage from "./../../../assets/icons/navigate/label.svg";
import personImage from "./../../../assets/icons/navigate/person.svg";
import phoneImage from "./../../../assets/icons/navigate/phone.svg";
import styles from "./NavigationPanel.module.css";

const NavigationPanel = () => {
    return (
        <nav className={"container " + styles.nav}>
            <Link className={styles.item} to="/about">
                <img src={caseImage} alt="Иконка" />
                <span>
                    О компании
                </span>
            </Link>
            <Link className={styles.item} to="/contacts">
                <img src={phoneImage} alt="Иконка" />
                <span>
                    Контакты
                </span>
            </Link>
            <Link className={styles.item} to="/delivery">
                <img src={deliveryImage} alt="Иконка" />
                <span>
                    Доставка <br/> и оплата
                </span>
            </Link>
            <Link className={styles.item} to="/price-list">
                <img src={labelImage} alt="Иконка" />
                <span>
                    <strong>Прайс-лист</strong> всей продукции
                </span>
            </Link>
            <Link className={styles.item} to="/stock">
                <img src={discountImage} alt="Иконка" />
                <span>
                    Акции
                </span>
            </Link>
            <Link className={styles.item} to="/contract">
                <img src={documentsImage} alt="Иконка" />
                <span>
                    Заключить договор
                </span>
            </Link>
            <Link className={styles.item} to="/order-production">
                <img src={personImage} alt="Иконка" />
                <span>
                    Производство на заказ
                </span>
            </Link>
        </nav>
    )
}

export default NavigationPanel;