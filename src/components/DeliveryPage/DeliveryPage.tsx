import {NavLink} from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";
import pickup from "./../../assets/icons/pickup.svg";
import delivery from "./../../assets/icons/delivery.svg";
import deliveryRus from "./../../assets/icons/delivery-rus.svg";
import payment from "./../../assets/icons/payment.svg";
import QueryBlock from "../common/QueryBlock/QueryBlock";
import styles from "./DeliveryPage.module.css";

const DeliveryPage = () => {
    return (
        <section className={"container "}>
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
                    <div>
                        <strong>Самовывоз со склада</strong> осуществляется по адресу Санкт-Петербург, г. Сестрорецк, ул. Воскова, д. 2 лит. Т Режим работы с 9:00 до 18:00 часов без перерыва и выходных.
                    </div>
                </div>
                <div className={styles.item}>
                    <img src={delivery} alt="По области"/>
                    <div>
                        <strong>Доставка по Санкт-Петербургу и Лен. обл.</strong> <br/>
                        <span>Бессрочная акция:</span> бесплатная доставка по Санкт-Петербургу при заказе от 30 тыс. рублей. Чтобы воспользоваться этим предложением, просто позвоните или напишите нам.
                    </div>
                </div>
                <div className={styles.item}>
                    <img src={deliveryRus} alt="По России"/>
                    <div>
                        <strong>Доставка по России</strong> <br/>
                        Заказ товара производится <strong>по телефону</strong>, необходимо согласовать все необходимые характеристики товара, его стоимость и иную информацию. Далее выставляется счет на оплату. <br/>
                        Исходя из Вашего статуса, необходимы следующие данные: <br/>
                        <ol>
                            <li>
                                Если Вы <strong>физическое лицо:</strong> ФИО, адрес доставки и телефон.
                            </li>
                            <li>
                                Если Вы <strong>юридическое лицо:</strong> реквизиты организации или ИП и телефон, по которому можно с Вами связаться.
                            </li>
                        </ol>
                        После того, как Вы оплатили счет, мы производим доставку заказа до терминала транспортной компании в течение <strong>1-3 дней.</strong> Далее с Вами связывается сотрудник ТК для согласования точной стоимости услуг по доставке. Мы можем доставить заказ любой транспортной компанией, которой Вам будет удобно.
                    </div>
                </div>
            </article>
            <article>
                <h2 className={styles.title}>
                    Информация об оплате
                </h2>
                <div className={styles.item + " " + styles.paymentItem}>
                    <img src={payment} alt=""/>
                    <div>
                        Оплата осуществляется безналично
                    </div>
                </div>
            </article>
            <QueryBlock />
        </section>
    )
}

export default DeliveryPage;