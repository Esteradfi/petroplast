import styles from "./ContractPage.module.css";
import docs from "./../../assets/icons/navigate/documents.svg";
import hands from "./../../assets/icons/navigate/hands.svg";
import dot from "./../../assets/icons/dot.svg";
import {NavLink} from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";
import {useAppDispatch} from "../../redux/hooks";
import {changeIsOpen, setIsQueryModal} from "../../redux/modal-reducer";

const ContractPage = () => {
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
                <NavLink to="/contract">
                    Заключить договор
                </NavLink>
            </article>
            <article>
                <header className={styles.header}>
                    <img src={docs} alt="Договор"/>
                    <h2 className={styles.title}>
                        Заключить договор
                    </h2>
                </header>
                <p className={styles.text}>
                    Для удобства клиентов мы размещаем список необходимых документов для надлежащей подготовки к
                    заключению договора. <br/>
                    Просим приcылать данные документы в электронной форме вместе с Вашей заявкой или иным
                    обращением. <br/>
                    Заверенные копии документов мы просим предоставить на момент заключения двусторонних договоров.
                </p>
                <div>
                    <h4 className={styles.subtitle}>
                        Для заключения договора
                    </h4>
                    <ul className={styles.text}>
                        <li>копию свидетельства ОГРН или ОГРНИП</li>
                        <li>копию свидетельства о постановке на учет в налоговом органе</li>
                        <li>копию 1, 3 и последнего листов Устава (для юридических лиц)</li>
                    </ul>
                </div>
                <div>
                    <h4 className={styles.subtitle}>
                        Для получения товара
                    </h4>
                    <ul className={styles.text}>
                        <li>доверенность, выданную на экспедитора (водителя)
                            или печать организации, на которую был выписан товар
                        </li>
                    </ul>
                </div>
            </article>
            <article>
                <header className={styles.header}>
                    <img src={hands} alt="Договор"/>
                    <h2 className={styles.title}>
                        Условия работы с контрагентами
                    </h2>
                </header>
                <p className={styles.text}>
                    Товар отпускается только <strong>юридическим</strong> лицам после полной оплаты товара. <br/>
                    Для отгрузки товара необходимо заключить договор. <br/>
                    Для получения товара необходимо иметь доверенность или печать организации, на которую был выписан товар. <br/>
                    Минимальная сумма заказа — 50 000 рублей. <br/>
                    Может быть представлена скидка до 20 %. <br/>
                    В пределах Санкт-Петербурга мы доставим товар до магазина, склада, вашего экспедитора.
                </p>
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

export default ContractPage;