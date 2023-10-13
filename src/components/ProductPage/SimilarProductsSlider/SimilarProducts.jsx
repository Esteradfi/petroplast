import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {setSelectedCategoryProducts} from "../../../redux/products-reducer";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import SimilarProductsSlider from "./SimilarProductsSlider/SimilarProductsSlider";
import SimilarProductCard from "./SimilarProductCard/SimilarProductCard";
import styles from "./SimilarProducts.module.css";

const SimilarProducts = (props) => {
    const dispatch = useAppDispatch();
    let selectedProduct = props.product;
    const categoryName = useLocation().pathname.split('/')[2];
    const decodedCategoryName = decodeURIComponent(categoryName);

    useEffect(() => {
        dispatch(setSelectedCategoryProducts(decodedCategoryName));
    }, [selectedProduct, decodedCategoryName]);

    const similarProducts = useAppSelector(state => state.products.selectedCategoryProducts);
    let filterSimilarProducts;

    if (similarProducts) {
        filterSimilarProducts = similarProducts.filter(product => product._id !== selectedProduct._id);
    }

    return (
        <article className={"container " + styles.similarProducts}>
            {
                filterSimilarProducts && filterSimilarProducts.length > 0 &&
                <>
                    <h3 className={styles.title}>
                        Похожие товары
                    </h3>
                    {
                        filterSimilarProducts.length === 1 ?
                            <SimilarProductCard product={filterSimilarProducts[0]} />
                            :
                            <SimilarProductsSlider key={Math.random()} products={filterSimilarProducts} />
                    }
                </>
            }
        </article>
    )
}

export default SimilarProducts;