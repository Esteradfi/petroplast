import styles from "./PriceList.module.css";
import pricesIcon from "./../../assets/icons/navigate/label.svg";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks";
import {ProductsItem} from "../../redux/products-reducer";
import PriceListItem from "./PriceListItem/PriceListItem";
import arrow from "./../../assets/icons/arrow.svg";

const PriceListPage = () => {
    const products = useAppSelector(state => state.products.productsList);
    const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));

    let sortedProductsItems = sortedProducts.map((el: ProductsItem) => <PriceListItem key={el._id} {...el} />)


    return (
        <section className={"container "}>
            <article className={"breadcrumbs"}>
                <NavLink to="/">
                    Меню
                </NavLink>
                <img src={arrow} alt="Стрелка"/>
                <NavLink to="/price-list">
                    Прайс-лист
                </NavLink>
            </article>
            <header className={styles.header}>
                <img src={pricesIcon} alt="Прайс-лист"/>
                <h2>
                    Прайс-лист продукции “Петропласт”
                </h2>
            </header>
            <article className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead className={styles.thead}>
                    <tr>
                        <th>Артикул</th>
                        <th>Название товара</th>
                        <th>Кол-во шт. <br/> в паке</th>
                        <th>Цена за шт. <br/> с НДС (₽)</th>
                        <th>Цена <br/> за пак
                            (₽)
                        </th>
                        <th>Фото</th>
                    </tr>
                    </thead>
                    <tbody>
                    {sortedProductsItems}
                    </tbody>
                </table>
            </article>
        </section>
    )
}

export default PriceListPage;