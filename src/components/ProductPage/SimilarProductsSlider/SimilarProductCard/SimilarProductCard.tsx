import styles from "./SimilarProductCard.module.css";
import {formatNumber} from "../../../../utils/formatPrice";
import {NavLink} from "react-router-dom";

const SimilarProductCard = ({...props}) => {

    const product = props.product;

    return (
        <div className={styles.card}>
            <img src={product.images[0]} alt="Товар"/>
            <h4>
                {product.name}
            </h4>
            <p>
                {product.colors.join(", ").toLowerCase()}
            </p>
            <p>
                {
                    product.productLength && product.productWidth && product.productHeight
                    ? product.productLength + 'x' + product.productWidth + 'x' + product.productHeight + ' см'
                    : null
                }
            </p>
            <p>
                <strong>{formatNumber(product.retailPrice)}</strong> за шт
            </p>
            <p>
                <strong>{formatNumber(product.wholesalePrice)}</strong> за пак
            </p>
            <p>
                ({product.quantityPerPackage} шт)
            </p>
            <NavLink to={"/category/" + product.category + "/" + product._id}>
                Смотреть
            </NavLink>
        </div>
    )
}

export default SimilarProductCard;