import star from "./../../../assets/icons/star.png";
import styles from "./PrivilegeBlock.module.css";

const PrivilegeBlock = () => {
    return (
        <article className={"container "}>
            <h3 className={styles.title}>
                Наши преимущества
            </h3>
            <div className={styles.item}>
                <img src={star} alt="Преимущество" />
                <div>
                    <h5 className={styles.subtitle}>
                        Качественная продукция
                    </h5>
                    <p className={styles.paragraph}>
                        Производим хозяйственно-бытовые изделия собственных разработок
                    </p>
                </div>
            </div>
            <div className={styles.item}>
                <img src={star} alt="Преимущество" />
                <div>
                    <h5 className={styles.subtitle}>
                        Скидки от объема
                    </h5>
                    <p className={styles.paragraph}>
                        Чем больше заказываете, тем больше скидка
                    </p>
                </div>
            </div>
            <div className={styles.item}>
                <img src={star} alt="Преимущество" />
                <div>
                    <h5 className={styles.subtitle}>
                        Доставка по всей России
                    </h5>
                    <p className={styles.paragraph}>
                        Доставка от 2-х дней по Санкт-Петербургу и Ленинградской области
                    </p>
                </div>
            </div>
        </article>
    )
}

export default PrivilegeBlock;