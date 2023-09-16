import styles from "./QueryBlock.module.css";

const QueryBlock = () => {
    return (
        <article className={"container " + styles.QueryBlock}>
            <h3 className={styles.title}>
                Оставьте заявку и мы Вам позвоним!
            </h3>
            <button className={styles.button}>
                Оставить заявку
            </button>
        </article>
    )
}

export default QueryBlock;