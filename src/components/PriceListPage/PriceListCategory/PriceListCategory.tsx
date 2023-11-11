import PriceListItem from "../PriceListItem/PriceListItem";
import styles from "./../PriceList.module.css";

const PriceListCategory = ({...props}) => {
    let category = props.category;
    console.log(category)

    let sortedProductsItems = category.map((el: any) => <PriceListItem key={el._id} {...el} />)
    return (
        <tr>
            <td colSpan={6}>
                <table className={styles.categoryTable} width={`100%`} cellSpacing={0} cellPadding={0}>
                    <thead>
                    <tr className={styles.categoryTitle}>
                        <td colSpan={6} className={styles.categoryTitleCell}>
                            {category[0].category}
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    {sortedProductsItems}
                    </tbody>
                </table>
            </td>
        </tr>
    )
}

export default PriceListCategory;