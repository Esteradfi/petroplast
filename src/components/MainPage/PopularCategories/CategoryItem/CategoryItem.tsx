import styles from "./CategoryItem.module.css";
import {NavLink} from "react-router-dom";

const CategoryItem = ({...el}) => {
    return (
        <NavLink to={"/" + el.name} className={styles.card}>
            <img src={el.image} alt="Категория" />
            <h4>
                {el.name}
            </h4>
        </NavLink>
    )
}

export default CategoryItem;