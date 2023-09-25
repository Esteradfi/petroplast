import stock from "./../assets/icons/navigate/discount.svg";
import percent from "./../assets/icons/percent.svg";
import delivery from "./../assets/icons/delivery.svg";
import tablet from "./../assets/icons/tablet.svg";
import styles from "./StockPage.module.css";

const StockPage = () => {
    return (
        <section className={"container " + styles.page}>
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
                            10% для новых клиентов
                        </h4>
                        <p>
                            В нашей компании действует особая акция для новых клиентов — скидка 10% на все наши товары и
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
                <div className={styles.item}>
                    <div className={styles.image}>
                        <img src={tablet} alt="Новые клиенты"/>
                    </div>
                    <div className={styles.text}>
                        <h4>
                            Скидка за отзыв
                        </h4>
                        <p>
                            Оставьте отзыв о нашей компании, и получите скидку 10% на следующий заказ. Эта акция
                            бессрочная и предназначена для оптовых покупателей. <br/>
                            <strong>Чтобы получить скидку, следуйте этой схеме:</strong>
                            <ul>
                                <li>
                                    Перейдите на страницу компании в Яндекс.Картах по <a target="_blank"
                                                                                         href="https://yandex.ru/maps/org/petroplast_rf/1073073345/reviews/">ссылке</a>.
                                </li>
                                <li>
                                    Оцените нас по пятибалльной шкале, нажав на соответствующую звезду.
                                </li>
                                <li>
                                    Оставьте отзыв, рассказывая о Вашем опыте сотрудничества с нами и том, что Вам
                                    понравилось или не понравилось. Также мы будем рады фотографиям заказов.
                                </li>
                                <li>
                                    Нажмите кнопку "Сохранить".
                                </li>
                                <li>
                                    Покажите Ваш отзыв менеджеру в офисе или магазине, либо отправьте его нам на почту.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </article>
            <article className={styles.buttonArticle}>
                <h3 className={styles.buttonTitle}>
                    Оставьте заявку и мы Вам позвоним!
                </h3>
                <button className={styles.button}>
                    Оставить заявку
                </button>
            </article>
        </section>
    )
}

export default StockPage;