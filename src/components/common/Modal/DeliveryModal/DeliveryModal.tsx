import styles from "../Modal.module.css";
import close from "../../../../assets/icons/close.svg";
import phone from "../../../../assets/icons/phone.svg";
import delivery from "../../../../assets/images/delivery.png";
import {useAppDispatch} from "../../../../redux/hooks";
import {clearModal} from "../../../../redux/modal-reducer";

const DeliveryModal = () => {
    const dispatch = useAppDispatch();

    const closeModal = () => {
        dispatch(clearModal());
    }
    return (
        <div className={styles.modalContent}>
            <img onClick={closeModal} className={styles.close} src={close} alt="Закрыть"/>
            <h3 className={styles.title}>
                Доставка по Санкт-Петербургу и Лен. обл.
            </h3>
            <p className={styles.text}>
                <span className={styles.red}>Бессрочная акция: </span>бесплатная доставка по Санкт-Петербургу при заказе от 30 тыс. рублей. Чтобы воспользоваться этим предложением, просто позвоните или напишите нам.
            </p>
            <div className={styles.buttonBlock}>
                <img src={phone} alt="Номер телефона"/>
                <a href="tel:+79626849473">+7 962 684 94 73</a>
            </div>
            <p className={styles.text}>
                <a href="mailto:office@petroplast.ru">
                    office@Petroplast.ru
                </a>
            </p>
            <img className={styles.deliveryIcon} src={delivery} alt="Доставка"/>
        </div>
    )
}

export default DeliveryModal;