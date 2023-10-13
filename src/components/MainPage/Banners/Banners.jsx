import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import Slide from "./Slide/Slide";
import 'swiper/css';
import styles from "./Banners.module.css";

const Banners = (props) => {

    let banners = props[0];

    let sliderSlides = banners.map(el => <SwiperSlide key={el._id}>
        <Slide key={el._id} el={el}/>
    </SwiperSlide>);

    return (
        <div className={"container " + styles.slider}>
            <Swiper loop={true} navigation={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay]}>
                {sliderSlides}
            </Swiper>
        </div>
    );
}

export default Banners;