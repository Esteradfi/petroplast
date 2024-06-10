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
import StockPage from "./components/StockPage/StockPage";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import {getCategoriesThunk} from "./redux/categories-reducer";
import {getProductsThunk} from "./redux/products-reducer";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";
import ProductPage from "./components/ProductPage/ProductPage";
import loader from "./assets/icons/loader.svg";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import {changeIsOpen, clearModal} from "./redux/modal-reducer";
import Modal from "./components/common/Modal/Modal";
import PickupModal from "./components/common/Modal/PickupModal/PickupModal";
import DeliveryModal from "./components/common/Modal/DeliveryModal/DeliveryModal";
import DeliveryRusModal from "./components/common/Modal/DeliveryRusModal/DeliveryRusModal";
import QueryModal from "./components/common/Modal/QueryModal/QueryModal";
import ContactsPage from "./components/ContactsPage/ContactsPage";
import PriceListPage from "./components/PriceListPage/PriceListPage";
import DeliveryPage from "./components/DeliveryPage/DeliveryPage";
import AboutPage from "./components/AboutPage/AboutPage";
import {Helmet, HelmetProvider} from 'react-helmet-async';
import GalleryPage from "./components/GalleryPage/GalleryPage";
import {getTextsThunk} from "./redux/texts-reducer";

function App() {
    const dispatch = useAppDispatch();
    const helmetContext = {};
    let isFethcingCategories = useAppSelector(state => state.categories.isFetching);
    let isFethcingProducts = useAppSelector(state => state.products.isFetching);
    let isFethcingBanners = useAppSelector(state => state.banners.isFetching);
    let isOpen = useAppSelector(state => state.modal.isOpen);
    let isPickupModal = useAppSelector(state => state.modal.isPickupModal);
    let isDeliveryModal = useAppSelector(state => state.modal.isDeliveryModal);
    let isDeliveryRusModal = useAppSelector(state => state.modal.isDeliveryRusModal);
    let isQueryModal = useAppSelector(state => state.modal.isQueryModal);

    useEffect(() => {
        dispatch(getBannersThunk());
        dispatch(getCategoriesThunk());
        dispatch(getProductsThunk());
        dispatch(getTextsThunk());
    }, []);

    const closePopup = () => {
        dispatch(clearModal());
    }


    return (
        <HelmetProvider context={helmetContext}>
            <Helmet>
                <meta name="description" content="Компания Петропласт является производителем пластмассовых хозяйственно-бытовых изделий. Мы предлагаем широкий ассортимент высококачественных и практичных товаров для дома. Оформите заявку сейчас и улучшите свою повседневную жизнь!"/>
                    <title>Петропласт - производитель пластмассовых хозяйственно-бытовых изделий</title>
            </Helmet>
            <div className={isOpen ? "lock" : "App"}>
                {isOpen && <div onClick={closePopup} className="overlay"></div>}
                {
                    isOpen && <Modal>
                        {isPickupModal ? <PickupModal/> : isDeliveryModal ? <DeliveryModal/> : isDeliveryRusModal ?
                            <DeliveryRusModal/> : <QueryModal/>}
                    </Modal>
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
                                        <Route path="/contacts" element={<ContactsPage/>}/>
                                        <Route path="/price-list" element={<PriceListPage/>}/>
                                        <Route path="/about" element={<AboutPage/>}/>
                                        <Route path="/delivery" element={<DeliveryPage/>}/>
                                        <Route path="/category/:category" element={<CategoryPage/>}/>
                                        <Route path="/category/:category/gallery" element={<GalleryPage/>}/>
                                        <Route path="/category/:category/:product" element={<ProductPage/>}/>
                                        <Route path="*" element={<ErrorPage/>}/>
                                    </Routes>
                            }
                        </main>
                    </ScrollToTop>
                </div>
                <Footer/>
            </div>
        </HelmetProvider>
    );
}

export default App;
