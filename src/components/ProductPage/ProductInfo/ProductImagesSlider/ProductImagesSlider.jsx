import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from 'swiper/modules';
import styles from './ProductImagesSlider.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import {useState} from "react";

const ProductImagesSlider = (props) => {
    let images = props.images;

    let sliderSlides = images.map(el => <SwiperSlide key={el}><img src={el} className={styles.image}
                                                                   alt="Фото"/></SwiperSlide>);

    return (
        <div className={"product-slider " + styles.slider}>
            <Swiper loop={true} navigation={sliderSlides.length > 1} spaceBetween={0}
                    modules={[Navigation, Pagination]} pagination={{clickable: true}}>
                {sliderSlides}
            </Swiper>
        </div>
    )
}

export default ProductImagesSlider;