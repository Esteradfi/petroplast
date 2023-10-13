import styles from "./../Modal.module.css";
import phone from "./../../../../assets/icons/phone.svg";
import pickup from "./../../../../assets/icons/pickup.svg";
import close from "./../../../../assets/icons/close.svg";
import {useAppDispatch} from "../../../../redux/hooks";
import {clearModal} from "../../../../redux/modal-reducer";

const PickupModal = () => {
    const dispatch = useAppDispatch();

    const closeModal = () => {
        dispatch(clearModal());
    }

    return (
        <div className={styles.modalContent}>
            <img onClick={closeModal} className={styles.close} src={close} alt="Закрыть"/>
            <h3 className={styles.title}>
                Самовывоз со склада
            </h3>
            <h4 className={styles.subtitle}>
                Адрес склада
            </h4>
            <p className={styles.text}>
                <a href="https://yandex.ru/maps/102557/sestroretsk/?ll=29.964544%2C60.097642&mode=poi&poi%5Bpoint%5D=29.964406%2C60.097590&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1073073345&z=19">
                    Санкт-Петербург, г. Сестрорецк, ул. Воскова, д. 2 лит. Т
                </a>
            </p>
            <p className={styles.text}>
                Режим работы с 9:00 до 18:00 часов без перерыва и выходных.
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
            <img className={styles.pickupIcon} src={pickup} alt="Самовывоз"/>
        </div>
    )
}

export default PickupModal;