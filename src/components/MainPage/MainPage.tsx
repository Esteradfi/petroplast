import QueryBlock from "../common/QueryBlock/QueryBlock";
import NavigationPanel from "./NavigationPanel/NavigationPanel";
import PopularCategories from "./PopularCategories/PopularCategories";
import PrivilegeBlock from "./PrivilegeBlock/PriveilegeBlock";
import {useAppSelector} from "../../redux/hooks";
import Banners from "./Banners/Banners";
import stylesBanner from "./Banners/Banners.module.css"
import {useState} from "react";
import styles from "./MainPage.module.css";
import {CategoriesItem} from "../../redux/categories-reducer";
import MainSlider from "./MainSlider/MainSlider";

const MainPage = () => {
    let banners = useAppSelector(state => state.banners.bannersList);
    let categories = useAppSelector(state => state.categories.categoriesList);

    let fixedCategories = [...categories].filter((el: CategoriesItem) => el.checkbox).sort((a: CategoriesItem, b: CategoriesItem) => {
        if (a.name === "Хиты продаж") {
            return -1; // a будет первым
        }
        if (b.name === "Хиты продаж") {
            return 1; // b будет первым
        }
        return 0;
    });

    return (
        <section>
            <NavigationPanel/>
            {
                banners.length === 0 ? null
                    : banners.length === 1 ?
                        <img className={stylesBanner.image} src={banners[0].links[0]} alt="Баннер"/>
                        : <Banners {...[banners]} />
            }
            {
                !categories || categories.length === 0 ? null : <PopularCategories/>
            }
            {fixedCategories.findIndex((category: CategoriesItem) => category.name === "Хиты продаж") === 0 &&
                <MainSlider category={fixedCategories.find((category: CategoriesItem) => category.name === "Хиты продаж")} />}
            {fixedCategories.findIndex((category: CategoriesItem) => category.name !== "Хиты продаж") !== -1 &&
                <MainSlider category={fixedCategories.find((category: CategoriesItem) => category.name !== "Хиты продаж")} />}
            <PrivilegeBlock/>
            <QueryBlock/>
        </section>
    )
}

export default MainPage;