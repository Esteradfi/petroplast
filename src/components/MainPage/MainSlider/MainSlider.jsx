import {useAppSelector} from "../../../redux/hooks";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import {Navigation, Pagination} from "swiper/modules";
import SimilarProductCard from "../../ProductPage/SimilarProductsSlider/SimilarProductCard/SimilarProductCard";
import styles from "../../ProductPage/SimilarProductsSlider/SimilarProductsSlider/SimilarProductsSlider.module.css";
import mainStyles from "./MainSlider.module.css";
import {useEffect, useState} from "react";
import { useMediaQuery } from 'react-responsive';

const MainSlider = ({...props}) => {
    let category = props.category;
    let productsList = useAppSelector(state => state.products.productsList);

    let selectedProducts = productsList.filter(el => el.category === category.name);

/*
    const isMobile = useMediaQuery({ minWidth: 604, maxWidth: 917 });
    const isTablet = useMediaQuery({ minWidth: 918, maxWidth: 1219 });
    const isDesktop = useMediaQuery({ minWidth: 1220 });

    const slidesPerGroup = isDesktop ? 4 : isTablet ? 3 : isMobile ? 2 : 1; */

    if (selectedProducts.length === 0) {
        return <div></div>
    }

    let sliderSlides = selectedProducts.map(el => <SwiperSlide key={el._id}><SimilarProductCard product={el} /></SwiperSlide>);

    return (
        <section className={"container mainSlider " + mainStyles.mainSlider}>
            <h3 className={mainStyles.title}>
                {category.name}
            </h3>
            <article className={"similar-products-slider " + styles.sliderWrapper}>
                <Swiper
                    slidesPerView={'auto'}
                    slidesPerGroup={1}
                    spaceBetween={72}
                    navigation={true}
                    pagination={{clickable: true}}
                    modules={[Navigation, Pagination]}
                >
                    {sliderSlides}
                </Swiper>
            </article>
        </section>
    )
}

export default MainSlider;