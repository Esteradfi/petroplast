import PrivilegeBlock from "../MainPage/PrivilegeBlock/PriveilegeBlock";
import QueryBlock from "../common/QueryBlock/QueryBlock";
import Features from "./Features/Features";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {NavLink, useNavigate} from 'react-router-dom';
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {setSelectedProduct} from "../../redux/products-reducer";
import styles from "./ProductPage.module.css";
import ProductInfo from "./ProductInfo/ProductInfo";
import SimilarProducts from "./SimilarProductsSlider/SimilarProducts";
import arrow from "../../assets/icons/arrow.svg";

const ProductPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const products = useAppSelector(state => state.products.productsList);
    const productId = useLocation().pathname.split('/')[3];
    const productCategory = useLocation().pathname.split('/')[2];
    const decodedProductCategory = decodeURIComponent(productCategory);
    const decodedProductId = decodeURIComponent(productId);
    const isExistingProduct = products.find(product => product._id === decodedProductId);

    useEffect(() => {
        if (!isExistingProduct) {
            navigate("/404")
        }
    }, [isExistingProduct]);

    useEffect(() => {
        dispatch(setSelectedProduct(decodedProductId))
    }, [products, decodedProductId]);

    let selectedProduct: any = useAppSelector(state => state.products.selectedProduct);

    return (
        <section>
            <article className={"container breadcrumbs"}>
                <NavLink to="/">
                    Популярные категории
                </NavLink>
                <img src={arrow} alt="Стрелка"/>
                <NavLink to={`/category/${decodedProductCategory}`}>
                    {decodedProductCategory}
                </NavLink>
                <img src={arrow} alt="Стрелка"/>
                <NavLink to={`/category/${decodedProductCategory}/${decodedProductId}`}>
                    {selectedProduct && selectedProduct.name}
                </NavLink>
            </article>
            {selectedProduct && <ProductInfo product={selectedProduct} />}
            {selectedProduct && <Features product={selectedProduct} />}
            {selectedProduct && <SimilarProducts product={selectedProduct} />}
            <PrivilegeBlock />
            <QueryBlock />
        </section>
    )
}

export default ProductPage;