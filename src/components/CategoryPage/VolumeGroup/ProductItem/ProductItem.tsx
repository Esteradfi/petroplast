import styles from "./ProductItem.module.css";
import {formatNumber} from "../../../../utils/formatPrice";
import {NavLink, useLocation} from "react-router-dom";

const ProductItem = ({...el}) => {
    let location = useLocation().pathname;
    let item = el.item;

    return (
        <div className={styles.card}>
            <img className={styles.image} src={item.images[0]} alt={item.name}/>
            <h4 className={styles.name}>
                {item.name}
            </h4>
            <h5 className={styles.text}>{item.colors.join(", ").toLowerCase()}</h5>
            <span className={styles.text}>{item.volume > 1 ? item.volume + " л" : item.volume > 0 && item.volume < 1 ? item.volume * 1000 + " мл" : null}</span>
            <span className={styles.text}><strong className={styles.price}>{formatNumber(item.retailPrice)} ₽</strong> за шт</span>
            <NavLink className={styles.button} to={location + '/' + item._id}>
                Смотреть
            </NavLink>
        </div>
    )
}

export default ProductItem;