import { useEffect } from "react";
import { CategoriesItem, getCategoriesThunk } from "../../../redux/categories-reducer";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import CategoryItem from "./CategoryItem/CategoryItem";
import styles from "./PopularCategories.module.css";

const PopularCategories = () => {
    const dispatch = useAppDispatch();
    let categoriesList = useAppSelector(state => state.categories.categoriesList);

    function sortByCategoryName(a: CategoriesItem, b: CategoriesItem): number {
        // Если имя категории - "Новинки", то она должна быть первой
        if (a.name === "Новинки") {
            return -1; // a будет первым
        }
        if (b.name === "Новинки") {
            return 1; // b будет первым
        }

        // Если имя категории - "Хиты продаж", то она должна быть второй
        if (a.name === "Хиты продаж") {
            return -1; // a будет первым
        }
        if (b.name === "Хиты продаж") {
            return 1; // b будет первым
        }

        return 0;
    }

    const sortedCategories: any = [...categoriesList].sort(sortByCategoryName);

    let categoriesItems = sortedCategories.map((el: CategoriesItem) => <CategoryItem key={el._id} {...el} />);

    return (
        <article className={"container " + styles.popularCategories}>
            <h3 className={styles.title}>
                Популярные категории
            </h3>
            <div className={styles.categories}>
                {categoriesItems}
            </div>
        </article>
    )
}

export default PopularCategories;