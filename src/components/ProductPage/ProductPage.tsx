import PrivilegeBlock from "../MainPage/PrivilegeBlock/PriveilegeBlock";
import QueryBlock from "../common/QueryBlock/QueryBlock";
import Features from "./Features/Features";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {setSelectedProduct} from "../../redux/products-reducer";
import styles from "./ProductPage.module.css";
import ProductInfo from "./ProductInfo/ProductInfo";

const ProductPage = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(state => state.products.productsList);
    const location = useLocation().pathname;
    const productArticle = useLocation().pathname.split('/')[2];
    const decodedProductArticle = decodeURIComponent(productArticle);

    useEffect(() => {
        dispatch(setSelectedProduct(decodedProductArticle))
    }, [products, decodedProductArticle]);

    let selectedProduct: any = useAppSelector(state => state.products.selectedProduct);

    return (
        <section>
            {selectedProduct && <ProductInfo product={selectedProduct} />}
            {selectedProduct && <Features product={selectedProduct} />}
            <PrivilegeBlock />
            <QueryBlock />
        </section>
    )
}

export default ProductPage;