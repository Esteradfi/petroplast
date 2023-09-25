import {Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import {useEffect, useState} from "react";
import {getBannersThunk} from "./redux/banners-reducer";
import {useAppDispatch, useAppSelector} from "./redux/hooks";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage/PrivacyPolicyPage";
import OrderProduction from "./components/OrderProduction/OrderProduction";
import ContractPage from "./components/ContractPage/ContractPage";
import StockPage from "./StockPage/StockPage";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import {getCategoriesThunk} from "./redux/categories-reducer";
import {getProductsThunk} from "./redux/products-reducer";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";
import ProductPage from "./components/ProductPage/ProductPage";
import loader from "./assets/icons/loader.svg";

function App() {
    const dispatch = useAppDispatch();
    let isFethcingCategories = useAppSelector(state => state.categories.isFetching);
    let isFethcingProducts = useAppSelector(state => state.products.isFetching);
    let isFethcingBanners = useAppSelector(state => state.banners.isFetching);

    useEffect(() => {
        dispatch(getBannersThunk());
        dispatch(getCategoriesThunk());
        dispatch(getProductsThunk())
    }, []);

    let [isOpen, setIsOpen] = useState(false);

    const closePopup = () => {
        setIsOpen(false);
    }

    return (
        <div className={isOpen ? "lock" : "App"}>
            {isOpen && <div onClick={closePopup} className="overlay"></div>}
            {
                isOpen && <div className="popup">
                    <h2>Сайт на реконструкции!</h2>
                    <p>В данный момент мы занимаемся реконструкцией сайта. Скоро вернёмся.</p>
                    <div>
                        <button onClick={closePopup}>Закрыть</button>
                    </div>
                </div>
            }
            <div className='content'>
                <ScrollToTop>
                    <Header/>
                    <main>
                        {
                            isFethcingBanners || isFethcingCategories || isFethcingProducts ?
                                <div className={"loaderBlock"}>
                                    <img src={loader} alt="Загрузка"/>
                                </div> :
                                <Routes>
                                    <Route path="/" element={<MainPage/>}/>
                                    <Route path="/politika-konfidencialnosti" element={<PrivacyPolicyPage/>}/>
                                    <Route path="/order-production" element={<OrderProduction/>}/>
                                    <Route path="/contract" element={<ContractPage/>}/>
                                    <Route path="/stock" element={<StockPage/>}/>
                                    <Route path="/:category" element={<CategoryPage/>}/>
                                    <Route path="/:category/:product" element={<ProductPage/>}/>
                                </Routes>
                        }
                    </main>
                </ScrollToTop>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
