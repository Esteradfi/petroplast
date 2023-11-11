import styles from "./PriceList.module.css";
import pricesIcon from "./../../assets/icons/navigate/label.svg";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks";
import {ProductsItem} from "../../redux/products-reducer";
import PriceListItem from "./PriceListItem/PriceListItem";
import arrow from "./../../assets/icons/arrow.svg";
import PriceListCategory from "./PriceListCategory/PriceListCategory";

const PriceListPage = () => {
    const products: any = useAppSelector(state => state.products.productsList);
    const sortedProducts = products.reduce((acc: any[], product: any) => {
        if (product.category !== "Новинки" && product.category !== "Хиты продаж") {
            const categoryIndex = acc.findIndex((category: any[]) => category[0].category === product.category);

            if (categoryIndex !== -1) {
                acc[categoryIndex].push(product);
            } else {
                acc.push([product]);
            }
        }

        return acc;
    }, []);

    console.log(sortedProducts)


    let sortedProductsCategory = sortedProducts.map((el: Array<ProductsItem>) => <PriceListCategory key={el[0]._id} category={el} />);


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
                <table className={styles.table} cellSpacing={0} cellPadding={0}>
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
                    {sortedProductsCategory}
                    </tbody>
                </table>
            </article>
        </section>
    )
}

export default PriceListPage;