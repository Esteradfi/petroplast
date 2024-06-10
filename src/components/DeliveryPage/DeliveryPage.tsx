import {NavLink} from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";
import pickup from "./../../assets/icons/pickup.svg";
import delivery from "./../../assets/icons/delivery.svg";
import deliveryRus from "./../../assets/icons/delivery-rus.svg";
import payment from "./../../assets/icons/payment.svg";
import QueryBlock from "../common/QueryBlock/QueryBlock";
import styles from "./DeliveryPage.module.css";
import {Helmet} from "react-helmet-async";
import {useAppSelector} from "../../redux/hooks";

const DeliveryPage = () => {
    const texts = useAppSelector(state => state.texts.deliveryPageContent);

    return (
        <section className={"container "}>
            <Helmet>
                <title>{"Петропласт - Доставка и оплата"}</title>
                <meta name='description' content={"Петропласт - Доставка и оплата"} />
            </Helmet>
            <article className={"breadcrumbs"}>
                <NavLink to="/">
                    Меню
                </NavLink>
                <img src={arrow} alt="Стрелка"/>
                <NavLink to="/delivery">
                    Доставка и оплата
                </NavLink>
            </article>
            <article>
                <h2 className={styles.title}>
                    Информация о доставке
                </h2>
                <div className={styles.item}>
                    <img src={pickup} alt="Самовывоз"/>
                    <div dangerouslySetInnerHTML={{__html: texts.pickupContent.text}}></div>
                </div>
                <div className={styles.item}>
                    <img src={delivery} alt="По области"/>
                    <div dangerouslySetInnerHTML={{__html: texts.deliveryContent.text}}></div>
                </div>
                <div className={styles.item}>
                    <img src={deliveryRus} alt="По России"/>
                    <div dangerouslySetInnerHTML={{__html: texts.deliveryRusContent.text}}></div>
                </div>
            </article>
            <article>
                <h2 className={styles.title}>
                    Информация об оплате
                </h2>
                <div className={styles.item + " " + styles.paymentItem}>
                    <img src={payment} alt=""/>
                    <div dangerouslySetInnerHTML={{__html: texts.paymentContent.text}}></div>
                </div>
            </article>
            <QueryBlock />
        </section>
    )
}

export default DeliveryPage;