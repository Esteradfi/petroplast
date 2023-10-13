import {NavLink} from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";
import medal from "./../../assets/icons/medal.svg";
import aboutIcon from "./../../assets/icons/navigate/case.svg";
import documents from "./../../assets/icons/navigate/documents.svg";
import cer1 from "./../../assets/images/cer1.png";
import cer2 from "./../../assets/images/cer2.png";
import cer3 from "./../../assets/images/cer3.png";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
    return (
        <section className={"container "}>
            <article className={"breadcrumbs"}>
                <NavLink to="/">
                    Меню
                </NavLink>
                <img src={arrow} alt="Стрелка"/>
                <NavLink to="/delivery">
                    О компании
                </NavLink>
            </article>
            <article className={styles.article}>
                <header className={styles.header}>
                    <img src={aboutIcon} alt="О нас"/>
                    <h2>
                        О компании
                    </h2>
                </header>
                <div className={styles.content}>
                    Производственная компания “Петропласт” была образована в 1998 году. Основные производственные
                    мощности располагаются в Санкт-Петербурге, г. Сестрорецк. Компания производит хозяйственно-бытовые
                    изделия собственных разработок, а также различные изделия на заказ. Мы гордимся многолетними связями
                    с нашими постоянными партнёрами: заказчиками, сбытовыми сетями и поставщиками сырья.
                    <br/> <br/>
                    Производимые
                    нами товары представлены во многих магазинах сетевой торговли
                    и включены в ассортимент фирм оптовой торговли в Москве и Санкт-Петербурге.
                    Качество нашей продукции подтверждено декларациями о соответствии
                    и санитарно-эпидемиологическими заключениями.
                    У нас налажены прямые контакты с производителями пресс-форм в России и за рубежом.
                    Такие тесные связи позволяют учитывать любые пожелания наших потребителей,
                    вплоть до размещения на нашей производственной базе заказов фирм.
                </div>
            </article>
            <article className={styles.article}>
                <header className={styles.header}>
                    <img src={documents} alt="Сертификаты"/>
                    <h2>
                        Сертификаты “Петропласт”
                    </h2>
                </header>
                <div className={styles.images + " " + styles.images3}>
                    <img src={cer1} alt="Сертификат"/>
                    <img src={cer2} alt="Сертификат"/>
                    <img src={cer3} alt="Сертификат"/>
                </div>
                <footer className={styles.footer}>
                    <strong>Обновлено:</strong> апрель 2023
                </footer>
            </article>
            <article className={styles.article}>
                <header className={styles.header}>
                    <h2>
                        Банковские реквизиты “Петропласт”
                    </h2>
                </header>
                <div className={styles.content}>
                    <strong>Краткое наименование:</strong> ООО “ПЕТРОПЛАСТ.РФ” <br/>
                    <strong>Полное наименование:</strong> Общество с ограниченной ответственностью „ПЕТРОПЛАСТ.РФ“ <br/>
                    <strong>Генеральный директор:</strong> Балакай Антон Игоревич <br/>
                    <strong>ИНН:</strong> 7810453386 <br/>
                    <strong>КПП:</strong> 784301001 <br/>
                    <strong>Расчетный счет:</strong> 40702810302500137251 <br/>
                    <strong>Банк:</strong> ООО «Банк Точка» <br/>
                    <strong>Корреспондентский счет:</strong> 30101810745374525104 <br/>
                    <strong>БИК:</strong> 044525104 <br/>
                    <strong>ГРН:</strong> 1137847341499 <br/>
                    <strong>ОКТМО:</strong> 40362000 <br/>
                    <strong>ОКОГУ:</strong> 4210014 <br/>
                    <strong>ОКФС:</strong> 16 <br/>
                    <strong>ОКОПФ:</strong> 12165 <br/>
                    <strong>ОКПО:</strong> 56256289 <br/>
                    <strong>ОКАТО:</strong> 40284565000 <br/>
                    <strong>ОКВЭД:</strong> 22.29 <br/>
                </div>
            </article>
            <article className={styles.article}>
                <header className={styles.header}>
                    <img src={medal} alt="Условия труда"/>
                    <h2>
                        О специальной оценке условий труда
                    </h2>
                </header>
                <div className={styles.content}>
                    <strong>В соответствии и на основании:</strong> <br/>
                    <ul>
                        <li>
                            Федерального закона Российской Федерации № 426-ФЗ “О специальной оценке условий труда”,
                        </li>
                        <li>
                            приказа Минтруда России № 33н от 24.01.2014 “Об утверждении Методики проведения специальной
                            оценки условий труда, Классификатора вредных и (или) опасных производственных факторов,
                            формы отчета о проведении специальной оценки условий труда и инструкции по её заполнению”,
                        </li>
                        <li>
                            приказа “Об организации и проведении специальной оценки условий труда” № 8 от 12.09.2016
                            произведена специальная оценка условий труда.
                        </li>
                    </ul>
                    <strong>Согласно заключению эксперта №</strong> В12421-ТПБК-МЕ-СОУТ по результатам специальной оценки условий труда от 07.06.2022 выявлено следующее: <br/>
                    <ul>
                        <li>
                            вредные и (или) опасные производственные факторы на основе измерений и оценок на производстве НЕ ВЫЯВЛЕНЫ
                        </li>
                        <li>
                            рабочие места, на которых вредные факторы не идентифицированы, ОТСУТСТВУЮТ
                        </li>
                        <li>
                            перечень рекомендуемых мероприятий по улучшению условий труда для рабочих мест ОТСУТСТВУЕТ
                        </li>
                    </ul>
                    Результаты СОУТ переданы в Государственную инспекцию труда в городе Санкт-Петербурге.
                </div>
            </article>
        </section>
    )
}

export default AboutPage;