import {Link, useNavigate} from "react-router-dom";
import styles from "./../PriceList.module.css";
import {formatNumber} from "../../../utils/formatPrice";

const PriceListItem = ({...props}) => {
    const navigate = useNavigate();

    const toProductPage = () => {
        navigate(`/category/${props.category}/${props._id}`);
    }

    return (
        <tr onClick={toProductPage} className={styles.tr}>
            <td>
                {props.article}
            </td>
            <td>
                {props.name}
            </td>
            <td>
                {props.quantityPerPackage}
            </td>
            <td className={styles.tdSemiBold}>
                {formatNumber(props.retailPrice)}
            </td>
            <td className={styles.tdSemiBold}>
                {formatNumber(props.wholesalePrice)}
            </td>
            <td>
                <img className={styles.image} src={props.images[0]} alt="Фото"/>
            </td>
        </tr>
    )
}

export default PriceListItem;