import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";
import { getGalleryThunk } from "../../redux/categories-reducer";
import { clearAllFilters, setProducts } from "../../redux/filters-reducer";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ProductsItem, setSelectedCategoryProducts, sortVolumeProducts } from "../../redux/products-reducer";
import QueryBlock from "../common/QueryBlock/QueryBlock";
import PrivilegeBlock from "../MainPage/PrivilegeBlock/PriveilegeBlock";
import styles from "./CategoryPage.module.css";
import FiltersBlock from "./FiltersBlock/FiltersBlock";
import ProductItem from "./VolumeGroup/ProductItem/ProductItem";
import VolumeGroup from "./VolumeGroup/VolumeGroup";

const CategoryPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const products = useAppSelector(state => state.products.productsList);
    const categoryName: string = useLocation().pathname.split('/')[2];
    const decodedCategoryName: string = decodeURIComponent(categoryName);
    const isExistingCategory = products.find(product => product.category === decodedCategoryName);
    const isFilterPrice = useAppSelector(state => state.filters.price.isSelected);
    const isFilterVolume = useAppSelector(state => state.filters.volume.isSelected);
    const isFilterColors = useAppSelector(state => state.filters.colors.isSelected);
    const filteredProducts = useAppSelector(state => state.filters.filterProducts);


    useEffect(() => {
        if (!isExistingCategory) {
            navigate("/404", { replace: true });
        }
    }, [isExistingCategory])

    useEffect(() => {
        dispatch(setSelectedCategoryProducts(decodedCategoryName));
        dispatch(getGalleryThunk(decodedCategoryName));
    }, [products, decodedCategoryName]);

    const categoryProducts = useAppSelector(state => state.products.selectedCategoryProducts);

    useEffect(() => {
        if (categoryProducts) {
            dispatch(sortVolumeProducts(categoryProducts));
            dispatch(clearAllFilters());
            dispatch(setProducts(categoryProducts));
        }
    }, [categoryProducts]);

    const sortedVolumeProducts = useAppSelector(state => state.products.sortedVolumeProducts);

    let sortedVolumeProductsItems;

    if (sortedVolumeProducts) {
        sortedVolumeProductsItems = sortedVolumeProducts.map((el: Array<ProductsItem>) => <VolumeGroup key={el[0]._id}
                                                                                                       group={el}/>);
    }

    let filteredProductsItems;

    if (filteredProducts) {
        filteredProductsItems = filteredProducts.map(((el: ProductsItem) => <ProductItem key={el._id} item={el} />));
    }

    console.log(filteredProducts);

    return (
        <section>
            <Helmet>
                <title>{decodedCategoryName ? decodedCategoryName + " Петропласт" : "Петропласт"}</title>
                <meta name='description' content={sortedVolumeProducts && sortedVolumeProducts.length > 0 ? sortedVolumeProducts[0].description : "Петропласт"} />
            </Helmet>
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
                <FiltersBlock />
            </header>
            <article className={"container "}>
                <NavLink to={`/category/${decodedCategoryName}/gallery`} className={styles.gallery}>
                    Фотогалерея
                </NavLink>
            </article>
            <article className="container">
                {isFilterColors || isFilterPrice || isFilterVolume ? <div className={styles.items}>{filteredProductsItems}</div> : !sortedVolumeProductsItems || sortedVolumeProductsItems.length !== 0 ? sortedVolumeProductsItems :
                    <div className={styles.emptyBlock}>Товаров этой категории ещё нет</div>}
            </article>
            <PrivilegeBlock/>
            <QueryBlock/>
        </section>
    );
}

export default CategoryPage;
