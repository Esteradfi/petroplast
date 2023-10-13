import styles from "./../Header.module.css";
import React from "react";
import {ProductsItem} from "../../../redux/products-reducer";
import SearchResultsItem from "./SearchResultsItem/SearchResultsItem";
const SearchResults = ({...props}) => {

    let products = props.products;

    let productsItems = products.map((el: ProductsItem) => <SearchResultsItem key={el._id} product={el} />)

    return (
        <div className={styles.searchResultsBlock}>
            {productsItems}
        </div>
    )
}

export default SearchResults;