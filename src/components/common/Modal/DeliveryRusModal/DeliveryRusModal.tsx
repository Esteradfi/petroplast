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
            <p className={styles.smallText}>
                Заказ товара производится по телефону, необходимо согласовать все необходимые характеристики товара, его
                стоимость и иную информацию. Далее выставляется счет на оплату. <br/>
                Исходя из Вашего статуса, необходимы следующие данные:
            </p>
            <ol className={styles.list}>
                <li>Если Вы физическое лицо: ФИО, адрес доставки и телефон.</li>
                <li>Если Вы юридическое лицо: реквизиты организации или ИП и телефон, по которому можно с Вами
                    связаться.
                </li>
            </ol>
            <p className={styles.smallText}>
                После того, как Вы оплатили счет, мы производим доставку заказа до терминала транспортной компании в
                течение 1-3 дней. Далее с Вами связывается сотрудник ТК для согласования точной стоимости услуг по
                доставке. Мы можем доставить заказ любой транспортной компанией, которой Вам будет удобно.
            </p>
            <img className={styles.deliveryRusIcon} src={deliveryRus} alt="Доставка по России"/>
        </div>
    )
}

export default DeliveryRusModal;