import styles from "./OrderProduction.module.css";
import image from "./../../assets/icons/navigate/person.svg";
import {NavLink} from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";
import {changeIsOpen, setIsQueryModal} from "../../redux/modal-reducer";
import {useAppDispatch} from "../../redux/hooks";

const OrderProduction = () => {
    const dispatch = useAppDispatch();

    const openQueryModal = () => {
        dispatch(changeIsOpen(true));
        dispatch(setIsQueryModal(true));
    }
    return (
        <section className={"container " + styles.orderProduction}>
            <article className={"breadcrumbs"}>
                <NavLink to="/">
                    Меню
                </NavLink>
                <img src={arrow} alt="Стрелка"/>
                <NavLink to="/order-production">
                    Производство на заказ
                </NavLink>
            </article>
            <div className={styles.titleBlock}>
                <img src={image} alt="Пункт"/>
                <h2 className={styles.title}>
                    Производство на заказ
                </h2>
            </div>
            <p className={styles.text}>
                Принимаем заказы на литье изделий из пластмасс на собственных ТПА. Оказываем содействие по разработке и
                изготовлению пресс-форм по вашему заданию (разработка моделей в России, изготовление пресс-форм в
                Китае), организация доставки и таможенной очистки. <br/>
                <strong className={styles.strong}>Имеем многолетний опыт контрактного литья на заказ.</strong> <br/>
                Свои вопросы и предложения, связанные с производством на заказ Вы можете отправлять на почту:&nbsp;
                <strong className={styles.strong}>zakaz@petroplast.ru</strong>.
            </p>
            <h2 className={styles.title}>
                Оставьте заявку и мы Вам позвоним!
            </h2>
            <button onClick={openQueryModal} className={styles.button}>
                Оставить заявку
            </button>
        </section>
    )
}

export default OrderProduction;