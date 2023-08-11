import styles from "./CategoryItem.module.css";

const CategoryItem = ({...el}) => {
    return (
        <div className={styles.card}>
            <img src={el.image} alt="Категория" />
            <h4>
                {el.name}
            </h4>
        </div>
    )
}

export default CategoryItem;