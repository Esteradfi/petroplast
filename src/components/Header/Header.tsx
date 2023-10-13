import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeSearch, ProductsItem, setSearchResults} from "../../redux/products-reducer";
import burger from "./../../assets/icons/burger.svg";
import location from "./../../assets/icons/location.svg";
import phone from "./../../assets/icons/phone.svg";
import search from "./../../assets/icons/search.svg";
import workTime from "./../../assets/icons/workTime.svg";
import logo from "./../../assets/images/logo.jpg";
import styles from "./Header.module.css";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import SearchResults from "./SearchResults/SearchResults";
import cross from "./../../assets/icons/cross.svg";
import {CategoriesItem, changeIsOpenCatalog} from "../../redux/categories-reducer";
import {setIsQueryModal, changeIsOpen} from "../../redux/modal-reducer";

const Header = () => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector(state => state.categories.isOpen);
    const categoriesList = useAppSelector(state => state.categories.categoriesList);
    const productsList = useAppSelector((state) => state.products.productsList);
    const searchResults = useAppSelector((state) => state.products.searchResults);
    const [isCatalogFocused, setIsCatalogFocused] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isSearchMouseLeave, setIsSearchMouseLeave] = useState(false);

    const changeIsOpenMenu = () => {
        dispatch(changeIsOpenCatalog(!isOpen));
    }

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

    const normalizeText = (text: string) => {
        return text.replace(/ё/g, 'е').toLowerCase();
    }

    const searchProducts = (searchQuery: string) => {
        const normalizedSearchQuery = normalizeText(searchQuery);

        if (normalizedSearchQuery !== '') {
            const results = productsList.filter((product: any) =>
                normalizeText(product.name.toLowerCase()).includes(normalizedSearchQuery) ||
                normalizeText(product.article.toLowerCase()).includes(normalizedSearchQuery)
            ).filter((product: any) =>
                product.category.toLowerCase() !== 'хиты продаж'
            );
            dispatch(setSearchResults(results));
        } else {
            dispatch(setSearchResults([]));
        }
    }

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        let searchQuery = e.target.value;
        dispatch(changeSearch(searchQuery));
        searchProducts(searchQuery);
    }

    const handleSearchFocus = () => {
        setIsSearchFocused(true);
    };

    const handleSearchBlur = () => {
        setTimeout(() => {
            setIsSearchFocused(false);
        }, 150)
    }

    const handleSearchResultsMouseLeave = () => {
        setIsSearchMouseLeave(false);
    };

    const handleSearchResultsMouseEnter = () => {
        setIsSearchMouseLeave(true);
    };

    const handleSearchResultsMouseUp = () => {
        setTimeout(() => {
            setIsSearchMouseLeave(false);
        }, 150)
    };

    const handleSearchResultsMouseDown = () => {
        setIsSearchMouseLeave(true);
    };

    const handleSearchResultsTouchStart = () => {
        setIsSearchMouseLeave(true);
    };

    const handleSearchResultsTouchEnd = () => {
        setTimeout(() => {
            setIsSearchMouseLeave(false);
        }, 150);
    };


    const handleCatalogFocus = () => {
        setIsCatalogFocused(true);
    };

    const handleCatalogBlur = () => {
        setTimeout(() => {
            setIsCatalogFocused(false);
            dispatch(changeIsOpenCatalog(false));
        }, 150)
    }

    const handleCatalogMouseUp = () => {
        setTimeout(() => {
            dispatch(changeIsOpenCatalog(false));
        }, 150)
    };

    const handleCatalogMouseDown = () => {
        dispatch(changeIsOpenCatalog(true));
    };

    let catalogItems = [];

    if (sortedCategories && sortedCategories.length > 0) {
        catalogItems = sortedCategories.map((el: CategoriesItem) => (
            <NavLink
                className={styles.catalogItem}
                key={el._id}
                onMouseDown={handleCatalogMouseDown}
                onMouseUp={handleCatalogMouseUp}
                to={`/category/${el.name}`}
            >
                {el.name}
            </NavLink>
        ));
    }

    const openQueryModal = () => {
        dispatch(changeIsOpen(true));
        dispatch(setIsQueryModal(true));
    }

    return (
        <header className={styles.header}>
            <div className={styles.upperRow}>
                <div className={"container " + styles.content}>
                    <div className={styles.item}>
                        <img className={styles.icon} src={workTime} alt="Время работы"/>
                        <span>
              пн-пт 9.00-18.00
            </span>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.icon} src={location} alt=" Адрес"/>
                        <Link
                            to="https://yandex.ru/maps/102557/sestroretsk/?ll=29.964544%2C60.097642&mode=poi&poi%5Bpoint%5D=29.964406%2C60.097590&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1073073345&z=19">
                            Санкт-Петербург, г. Сестрорецк, ул. Воскова, д. 2 лит. Т
                        </Link>
                    </div>
                </div>
            </div>
            <div className={"container " + styles.middleRow}>
        <span className={styles.item}>
          Производство и оптовая продажа хозяйственных товаров
        </span>
                <Link to="/" className={styles.item}><img className={styles.logo} src={logo} alt="Логотип"/></Link>
                <div className={styles.item}>
                    <div className={styles.link}>
                        <img src={phone} alt="Телефон"/>
                        <Link to="tel:+79626849473">
                            +7 962 684 94 73
                        </Link>
                    </div>
                    <Link to="mailto:office@petroplast.ru">
                        office@petroplast.ru
                    </Link>
                </div>
            </div>
            <div className={"container " + styles.underRow}>
                <div className={styles.item + " " + styles.menuBlock} tabIndex={0} onFocus={handleCatalogFocus} onBlur={handleCatalogBlur}>
                    <button onClick={changeIsOpenMenu} className={isOpen ? styles.menuButtonOpen : styles.menuButton}>
                        <img src={isOpen ? cross : burger} className={isOpen ? styles.cross : ''} alt="Меню"/>
                        <span>Каталог</span>
                    </button>
                    {isOpen && isCatalogFocused &&
                        <div className={styles.catalog}>
                            {catalogItems}
                            <NavLink onMouseDown={handleCatalogMouseDown}
                                     onMouseUp={handleCatalogMouseUp} className={styles.catalogItem}
                                     to={"/order-production"}>
                                Производство на заказ
                            </NavLink>
                        </div>
                    }
                </div>
                <div className={styles.searchBlock + " " + styles.item} onMouseDown={handleSearchResultsMouseDown}
                     onMouseUp={handleSearchResultsMouseUp} onMouseEnter={handleSearchResultsMouseEnter}
                     onMouseLeave={handleSearchResultsMouseLeave} onTouchStart={handleSearchResultsTouchStart}
                     onTouchEnd={handleSearchResultsTouchEnd}>
                    <input className={styles.searchInput} type="text" placeholder="Поиск" onChange={onSearch}
                           onFocus={handleSearchFocus}
                           onBlur={handleSearchBlur}/>
                    <button className={styles.searchButton}>
                        <img src={search} alt="Поиск"/>
                    </button>
                    {
                        searchResults && searchResults.length > 0 && (isSearchFocused || isSearchMouseLeave) &&
                        <SearchResults products={searchResults}/>
                    }
                </div>
                <button onClick={openQueryModal} className={styles.queryButton + " " + styles.item}>
                    Оставить заявку
                </button>
            </div>
        </header>
    );
}

export default Header;
