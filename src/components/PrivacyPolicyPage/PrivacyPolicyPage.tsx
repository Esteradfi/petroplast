import circle from "./../../assets/icons/red-circle.svg";
import lock from "./../../assets/icons/lock.svg";
import styles from "./PrivacyPolicyPage.module.css";
import {Link, NavLink} from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";

const PrivacyPolicyPage = () => {
    return (
        <section className={"container " + styles.privacyPolicy}>
            <article className={"breadcrumbs"}>
                <NavLink to="/">
                    Петропласт
                </NavLink>
                <img src={arrow} alt="Стрелка"/>
                <NavLink to="/politika-konfidencialnosti">
                    Политика конфиденциальности
                </NavLink>
            </article>
            <article>
                <div className={styles.titleBlock}>
                    <img className={styles.image} src={lock} alt="Пункт"/>
                    <h2 className={styles.title}>
                        Политика конфиденциальности
                    </h2>
                </div>
                <p className={styles.text}>
                    Данная политика конфиденциальности относится к сайту с доменным именем <Link target="_blank"
                                                                                                 to="https://petroplast.ru/"
                                                                                                 className={styles.underline}>petroplast.ru</Link> (<Link
                    target="_blank" to="https://xn--80ajsldcfmdg.xn--p1ai/"
                    className={styles.underline}>петропласт.рф</Link>) и
                    его
                    поддоменам. Страница содержит сведения о том, какую информацию администрация сайта или третьи лица
                    могут
                    получать, когда пользователь (вы) посещаете его.
                </p>
            </article>
            <article>
                <h2 className={styles.title + ' ' + styles.singleTitle}>
                    Данные, которые собираются при посещении
                </h2>
                <div className={styles.privacyPolicyContainer}>
                    <div className={styles.block}>
                        <img src={circle} alt="Пункт"/>
                        <p>
                            <strong className={styles.strong}>Персональные данные:</strong><br/>
                            Персональные данные при посещении сайта передаются пользователем
                            добровольно, к ним могут относиться: имя, фамилия, отчество, номера телефонов, адреса
                            электронной почты, адреса для доставки товаров или оказания услуг, реквизиты компании,
                            которую представляет пользователь, должность в компании, которую представляет пользователь,
                            аккаунты в социальных сетях, а также — прочие, заполняемые поля форм. Эти данные собираются
                            в целях оказания услуг или продажи товаров, возможности связи с пользователем или иной
                            активности пользователя на сайте, а также, чтобы отправлять пользователю информацию, которую
                            он согласился получать. Мы не проверяем достоверность оставляемых данных и не гарантируем
                            качественного исполнения заказов, оказания услуг или обратной связи с нами при
                            предоставлении некорректных сведений. Данные собираются имеющимися на сайте формами для
                            заполнения (например, регистрации, оформления заказа, подписки, оставления отзыва, вопроса,
                            обратной связи и иными). Формы, установленные на сайте, могут передавать данные как напрямую
                            на сайт, так и на сайты сторонних организаций (скрипты сервисов сторонних организаций).
                            Данные могут собираться через технологию cookies (куки) как непосредственно сайтом, так и
                            скриптами сервисов сторонних организаций. Эти данные собираются автоматически, отправку этих
                            данных можно запретить, отключив cookies (куки) в браузере, в котором открывается сайт.
                        </p>
                    </div>
                    <div className={styles.block}>
                        <img src={circle} alt="Пункт"/>
                        <p>
                            <strong className={styles.strong}>Неперсональные данные:</strong><br/>
                            Кроме персональных данных при посещении сайта собираются не
                            персональные данные, их сбор происходит автоматически веб-сервером, на котором расположен
                            сайт, средствами CMS (системы управления сайтом), скриптами сторонних организаций,
                            установленными на сайте. К данным, собираемым автоматически, относятся: IP адрес и страна
                            его регистрации, имя домена, с которого вы к нам пришли, переходы посетителей с одной
                            страницы сайта на другую, информация, которую ваш браузер предоставляет добровольно при
                            посещении сайта, cookies (куки), фиксируются посещения, иные данные, собираемые счетчиками
                            аналитики сторонних организаций, установленными на сайте. Эти данные носят
                            неперсонифицированный характер и направлены на улучшение обслуживания клиентов, улучшения
                            удобства использования сайта, анализа статистики посещаемости.
                        </p>
                    </div>
                    <div className={styles.block}>
                        <img src={lock} alt="Пункт"/>
                        <p>
                            <h2 className={styles.title}>
                                Предоставление данных третьим лицам
                            </h2>
                            Мы не раскрываем личную информацию пользователей компаниям, организациям и частным лицам, не
                            связанным с нами. Исключение составляют случаи, перечисленные ниже. <br/>
                            <strong className={styles.strong}>Данные пользователей в общем доступе:</strong> <br/>
                            Персональные данные пользователя могут публиковаться в общем доступе в
                            соответствии с функционалом сайта, например, при оставлении отзывов / вопросов, может
                            публиковаться указанное пользователем имя, такая активность на сайте является добровольной,
                            и пользователь своими действиями дает согласие на такую публикацию. <br/>
                            <strong className={styles.strong}>По требованию закона:</strong> <br/>
                            Информация может быть раскрыта в целях воспрепятствования мошенничеству или иным
                            противоправным действиям; по требованию законодательства и в иных случаях, предусмотренных
                            законами РФ. <br/>
                            <strong className={styles.strong}>Для оказания услуг, выполнения обязательств:</strong>
                            <br/>
                            Пользователь соглашается с тем,
                            что персональная информация может быть передана третьим лицам в целях оказания заказанных на
                            сайте услуг, выполнении иных обязательств перед пользователем. К таким лицам, например,
                            относятся курьерская служба, почтовые службы, службы грузоперевозок и иные. <br/>
                            <strong className={styles.strong}>Сервисам сторонних организаций, установленным на
                                сайте:</strong> <br/>
                            На сайте могут быть установлены формы,
                            собирающие персональную информацию других организаций, в этом случае сбор, хранение и защита
                            персональной информации пользователя осуществляется сторонними организациями в соответствии
                            с их политикой конфиденциальности. Сбор, хранение и защита полученной от сторонней
                            организации информации осуществляется в соответствии с настоящей политикой
                            конфиденциальности.
                        </p>
                    </div>
                    <div className={styles.block}>
                        <img src={lock} alt="Пункт"/>
                        <p>
                            <h2 className={styles.title}>
                                Как мы защищаем ваши данные
                            </h2>
                            Мы принимаем соответствующие меры безопасности по сбору, хранению и обработке собранных
                            данных для защиты их от несанкционированного доступа, изменения, раскрытия или уничтожения,
                            ограничиваем нашим сотрудникам, подрядчикам и агентам доступ к персональным данным,
                            постоянно совершенствуем способы сбора, хранения и обработки данных, включая физические меры
                            безопасности, для противодействия несанкционированному доступу к нашим системам.
                        </p>
                    </div>
                    <div className={styles.block}>
                        <img src={lock} alt="Пункт"/>
                        <p>
                            <h2 className={styles.title}>
                                Ваше согласие с этими условиями
                            </h2>
                            Используя сайт, вы выражаете свое согласие с этой политикой конфиденциальности. Если вы не
                            согласны с этой политикой, пожалуйста, не используйте его. Ваше дальнейшее использование
                            сайта после внесения изменений в настоящую политику будет рассматриваться как ваше согласие
                            с этими изменениями.
                        </p>
                    </div>
                    <div className={styles.block}>
                        <img src={lock} alt="Пункт"/>
                        <p>
                            <h2 className={styles.title}>
                                Отказ от ответственности
                            </h2>
                            Политика конфиденциальности не распространяется ни на какие другие сайты и не применима к
                            веб-сайтам третьих лиц, которые могут содержать упоминание о нашем сайте и с которых могут
                            делаться ссылки на сайт, а также ссылки с этого сайта на другие сайты сети интернет. Мы не
                            несем ответственности за действия других веб-сайтов.
                        </p>
                    </div>
                    <div className={styles.block}>
                        <img src={lock} alt="Пункт"/>
                        <p>
                            <h2 className={styles.title}>
                                Изменения в политике конфиденциальности
                            </h2>
                            Мы имеем право по своему усмотрению обновлять данную политику конфиденциальности в любое
                            время. Мы рекомендуем пользователям регулярно проверять эту страницу (
                            <Link className={styles.underline}
                                  to="/politika-konfidencialnosti">политика конфиденциальности</Link>) для
                            того, чтобы быть в курсе любых
                            изменений того, как мы защищаем информацию о пользователях, которую собираем. Используя
                            сайт, вы соглашаетесь с принятием на себя ответственности за периодическое ознакомление с
                            политикой конфиденциальности и изменениями в ней.
                        </p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default PrivacyPolicyPage;

