import styles from "./VolumeGroup.module.css";
import {ProductsItem} from "../../../redux/products-reducer";
import ProductItem from "./ProductItem/ProductItem";
const VolumeGroup = ({...el}) => {

    let groupItems = el.group.map((el: ProductsItem) => <ProductItem key={el._id} item={el} />)

    return (
        <div className={styles.group}>
            <h3 className={styles.volumeTitle}>
                {
                    el.group[0].volume > 1 ? el.group[0].volume + " л" : el.group[0].volume > 0 && el.group[0].volume < 1 ? el.group[0].volume * 1000 + " мл" : null
                }
            </h3>
            <div className={styles.items}>
                {groupItems}
            </div>
        </div>
    )
}

export default VolumeGroup;