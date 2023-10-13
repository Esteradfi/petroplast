import {NavLink} from "react-router-dom";
import styles from "./../../Header.module.css";
import {useAppDispatch} from "../../../../redux/hooks";
import {changeSearch} from "../../../../redux/products-reducer";

const SearchResultsItem = ({...props}) => {
    const dispatch = useAppDispatch();
    let product = props.product;

    const clearSearch = () => {
        dispatch(changeSearch(''));
    }

    return (
        <NavLink onClick={clearSearch} className={styles.searchResultsItem} to={`/category/${product.category}/${product._id}`}>
            <img src={product.images[0]} alt="Фото"/>
            <h3>{product.name}</h3>
        </NavLink>
    )
}

export default SearchResultsItem;