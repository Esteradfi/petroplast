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
            <Link className={styles.item} to="/">
                <img src={caseImage} alt="Иконка" />
                <span>
                    О компании
                </span>
            </Link>
            <Link className={styles.item} to="/">
                <img src={phoneImage} alt="Иконка" />
                <span>
                    Контакты
                </span>
            </Link>
            <Link className={styles.item} to="/">
                <img src={deliveryImage} alt="Иконка" />
                <span>
                    Доставка и оплата
                </span>
            </Link>
            <Link className={styles.item} to="/">
                <img src={labelImage} alt="Иконка" />
                <span>
                    <strong>Прайс-лист</strong> всей продукции
                </span>
            </Link>
            <Link className={styles.item} to="/">
                <img src={discountImage} alt="Иконка" />
                <span>
                    Акции
                </span>
            </Link>
            <Link className={styles.item} to="/">
                <img src={documentsImage} alt="Иконка" />
                <span>
                    Заключить договор
                </span>
            </Link>
            <Link className={styles.item} to="/">
                <img src={personImage} alt="Иконка" />
                <span>
                    Производство на заказ
                </span>
            </Link>
        </nav>
    )
}

export default NavigationPanel;