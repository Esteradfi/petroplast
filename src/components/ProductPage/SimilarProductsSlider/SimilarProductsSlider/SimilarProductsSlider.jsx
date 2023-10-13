import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {Navigation, Pagination} from "swiper/modules";
import styles from "./SimilarProductsSlider.module.css";
import SimilarProductCard from "../SimilarProductCard/SimilarProductCard";

const SimilarProductsSlider = (props) => {

    let similarProducts = props.products;

    let sliderSlides = similarProducts.map(el => <SwiperSlide key={el._id}><SimilarProductCard product={el} /></SwiperSlide>);

    return (
        <div className={"similar-products-slider " + styles.sliderWrapper}>
            <Swiper
                slidesPerView={'auto'}
                slidesPerGroup={1}
                spaceBetween={72}
                navigation={true}
                modules={[Navigation]}
            >
                {sliderSlides}
            </Swiper>
        </div>
    )
}

export default SimilarProductsSlider;