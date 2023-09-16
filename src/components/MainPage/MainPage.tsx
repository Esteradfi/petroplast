import QueryBlock from "../common/QueryBlock/QueryBlock";
import NavigationPanel from "./NavigationPanel/NavigationPanel";
import PopularCategories from "./PopularCategories/PopularCategories";
import PrivilegeBlock from "./PrivilegeBlock/PriveilegeBlock";
import {useAppSelector} from "../../redux/hooks";
import Banners from "./Banners/Banners";
import stylesBanner from "./Banners/Banners.module.css"
import {useState} from "react";
import styles from "./MainPage.module.css";

const MainPage = () => {
    let banners = useAppSelector(state => state.banners.bannersList);

    return (
        <section>
            <NavigationPanel/>
            {
                banners.length === 0 ? null
                    : banners.length === 1 ?
                        <img className={stylesBanner.image} src={banners[0].links[0]} alt="Баннер"/>
                        : <Banners {...[banners]} />
            }
            <PopularCategories/>
            <PrivilegeBlock/>
            <QueryBlock/>
        </section>
    )
}

export default MainPage;