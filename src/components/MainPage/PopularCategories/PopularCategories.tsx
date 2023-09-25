import { useEffect } from "react";
import { CategoriesItem, getCategoriesThunk } from "../../../redux/categories-reducer";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import CategoryItem from "./CategoryItem/CategoryItem";
import styles from "./PopularCategories.module.css";

const PopularCategories = () => {
    const dispatch = useAppDispatch();
    let categoriesList = useAppSelector(state => state.categories.categoriesList);

    let categoriesItems = categoriesList.map((el: CategoriesItem) => <CategoryItem key={el._id} {...el} />);

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