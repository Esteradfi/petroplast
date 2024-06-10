import styles from "./GalleryPage.module.css";
import {Helmet} from "react-helmet-async";
import {NavLink, useLocation} from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {useEffect} from "react";
import {getGalleryThunk} from "../../redux/categories-reducer";
import GalleryItemBlock from "./GalleryItemBlock/GalleryItemBlock";
const GalleryPage = () => {
    const dispatch = useAppDispatch();
    const categoryName: string = useLocation().pathname.split('/')[2];
    const decodedCategoryName: string = decodeURIComponent(categoryName);
    const galleryList = useAppSelector(state => state.categories.galleryList);

    let galleryItems = galleryList.map((el: any) => <GalleryItemBlock key={el._id} {...el} />);

    return (
        <section className={"container"}>
            <Helmet>
                <title>{"Галерея" + decodedCategoryName ? decodedCategoryName + " Петропласт" : "Петропласт"}</title>
                <meta name='description' content={"Петропласт"} />
            </Helmet>
            <article className={"container breadcrumbs"}>
                <NavLink to="/">
                    Популярные категории
                </NavLink>
                <img src={arrow} alt="Стрелка"/>
                <NavLink to={`/category/${decodedCategoryName}`}>
                    {decodedCategoryName}
                </NavLink>
                <img src={arrow} alt="Стрелка"/>
                <NavLink to={`/category/${decodedCategoryName}/gallery`}>
                    Фотогалерея
                </NavLink>
            </article>
            {galleryList.length > 0 ?
                <article className={styles.items}>
                    {galleryItems}
                </article> :
                <article className={styles.empty}>
                    В галерею этой категории ещё не добавлены фотографии.
                </article>
            }
        </section>
    )
}

export default GalleryPage;