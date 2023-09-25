import styles from "./OrderProduction.module.css";
import image from "./../../assets/icons/navigate/person.svg";

const OrderProduction = () => {
    return (
        <section className={"container " + styles.orderProduction}>
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
            <button className={styles.button}>
                Оставить заявку
            </button>
        </section>
    )
}

export default OrderProduction;