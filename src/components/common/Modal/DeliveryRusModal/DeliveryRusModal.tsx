import styles from "../Modal.module.css";
import close from "../../../../assets/icons/close.svg";
import deliveryRus from "../../../../assets/icons/delivery-rus.svg";
import {useAppDispatch} from "../../../../redux/hooks";
import {clearModal} from "../../../../redux/modal-reducer";

const DeliveryRusModal = () => {
    const dispatch = useAppDispatch();

    const closeModal = () => {
        dispatch(clearModal());
    }
    return (
        <div className={styles.modalContent}>
            <img onClick={closeModal} className={styles.close} src={close} alt="Закрыть"/>
            <h3 className={styles.title}>
                Доставка по России
            </h3>
            <p className={styles.text}>
                Заказ товара производится <strong>по телефону</strong>, необходимо согласовать все необходимые характеристики товара, его
                стоимость и иную информацию. Далее выставляется счет на оплату. <br/>
            </p>
            <p className={styles.text}>
                Доставка осуществляется транспортными компаниями в соответствии с договоренностями сторон
            </p>
            <img className={styles.deliveryRusIcon} src={deliveryRus} alt="Доставка по России"/>
        </div>
    )
}

export default DeliveryRusModal;