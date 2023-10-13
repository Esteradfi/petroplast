import stock from "../../assets/icons/navigate/discount.svg";
import percent from "../../assets/icons/percent.svg";
import delivery from "../../assets/icons/delivery.svg";
import tablet from "../../assets/icons/tablet.svg";
import styles from "./StockPage.module.css";
import {NavLink} from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";
import {changeIsOpen, setIsQueryModal} from "../../redux/modal-reducer";
import {useAppDispatch} from "../../redux/hooks";

const StockPage = () => {
    const dispatch = useAppDispatch();

    const openQueryModal = () => {
        dispatch(changeIsOpen(true));
        dispatch(setIsQueryModal(true));
    }
    return (
        <section className={"container " + styles.page}>
            <article className={"breadcrumbs"}>
                <NavLink to="/">
                    Меню
                </NavLink>
                <img src={arrow} alt="Стрелка"/>
                <NavLink to="/stock">
                    Акции
                </NavLink>
            </article>
            <header className={styles.header}>
                <img src={stock} alt="Акции"/>
                <h2 className={styles.headerTitle}>
                    Акции
                </h2>
            </header>
            <article>
                <h2 className={styles.title}>
                    Для клиентов компании “Петропласт” предлагаются следующие акции:
                </h2>
                <div className={styles.item}>
                    <div className={styles.image}>
                        <img src={percent} alt="Новые клиенты"/>
                    </div>
                    <div className={styles.text}>
                        <h4>
                            10% для новых оптовых клиентов
                        </h4>
                        <p>
                            В нашей компании действует особая акция для новых оптовых клиентов — скидка 10% на все наши товары и
                            услуги. Эта акция бессрочная, поэтому вы можете воспользоваться ею в любое время. Чтобы
                            получить скидку, вам нужно лишь позвонить или написать нам. <br/>
                            Акция распространяется на регион Санкт-Петербург и Лен. область. Если вы являетесь оптовым
                            клиентом, то скидка также распространяется на оптовые продажи. Пожалуйста, обратите
                            внимание, что данная акция не суммируется с другими акционными предложениями. Не упустите
                            возможность сэкономить и приобрести качественные товары и услуги по выгодной цене.
                        </p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.image}>
                        <img src={delivery} alt="Новые клиенты"/>
                    </div>
                    <div className={styles.text}>
                        <h4>
                            Бесплатная доставка
                        </h4>
                        <p>
                            <span>Бессрочная акция:</span> бесплатная доставка по Санкт-Петербургу при заказе от &nbsp;
                            <strong>30 тыс. рублей</strong>. Чтобы воспользоваться этим предложением, просто позвоните
                            или напишите нам. <br/>
                            Мы доставим ваш заказ курьером независимо от его суммы, веса или размера — ограничений нет.
                            Пожалуйста, обратите внимание, что данная акция не суммируется с другими акционными
                            предложениями. <br/>
                            Не упустите возможность сэкономить на доставке и сделать заказ с удобством.
                            Просто свяжитесь с нами, и мы обеспечим бесплатную доставку вашего заказа по
                            Санкт-Петербургу.
                        </p>
                    </div>
                </div>
            </article>
            <article className={styles.buttonArticle}>
                <h3 className={styles.buttonTitle}>
                    Оставьте заявку и мы Вам позвоним!
                </h3>
                <button onClick={openQueryModal} className={styles.button}>
                    Оставить заявку
                </button>
            </article>
        </section>
    )
}

export default StockPage;