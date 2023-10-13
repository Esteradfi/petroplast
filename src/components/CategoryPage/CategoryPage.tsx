import styles from "./CategoryPage.module.css";
import QueryBlock from "../common/QueryBlock/QueryBlock";
import PrivilegeBlock from "../MainPage/PrivilegeBlock/PriveilegeBlock";
import {NavLink, useLocation} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {ProductsItem, setSelectedCategoryProducts, sortVolumeProducts} from "../../redux/products-reducer";
import VolumeGroup from "./VolumeGroup/VolumeGroup";
import productPage from "../ProductPage/ProductPage";
import arrow from "../../assets/icons/arrow.svg";

const CategoryPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const products = useAppSelector(state => state.products.productsList);
    const categoryName: string = useLocation().pathname.split('/')[2];
    const decodedCategoryName: string = decodeURIComponent(categoryName);
    const isExistingCategory = products.find(product => product.category === decodedCategoryName);

    useEffect(() => {
        if (!isExistingCategory) {
            navigate("/404");
        }
    }, [isExistingCategory])

    useEffect(() => {
        dispatch(setSelectedCategoryProducts(decodedCategoryName));
    }, [products, decodedCategoryName]);

    const categoryProducts = useAppSelector(state => state.products.selectedCategoryProducts);

    useEffect(() => {
        if (categoryProducts) {
            dispatch(sortVolumeProducts(categoryProducts));
        }
    }, [categoryProducts]);

    const sortedVolumeProducts = useAppSelector(state => state.products.sortedVolumeProducts);

    let sortedVolumeProductsItems;

    if (sortedVolumeProducts) {
        sortedVolumeProductsItems = sortedVolumeProducts.map((el: Array<ProductsItem>) => <VolumeGroup key={el[0]._id}
                                                                                                       group={el}/>);
    }

    return (
        <section>
            <article className={"container breadcrumbs"}>
                <NavLink to="/">
                    Популярные категории
                </NavLink>
                <img src={arrow} alt="Стрелка"/>
                <NavLink to={`/category/${decodedCategoryName}`}>
                    {decodedCategoryName}
                </NavLink>
            </article>
            <header className={"container " + styles.header}>
                <h2>
                    {decodedCategoryName}
                </h2>
            </header>
            <article className="container">
                {!sortedVolumeProductsItems || sortedVolumeProductsItems.length !== 0 ? sortedVolumeProductsItems :
                    <div className={styles.emptyBlock}>Товаров этой категории ещё нет</div>}
            </article>
            <PrivilegeBlock/>
            <QueryBlock/>
        </section>
    );
}

export default CategoryPage;
