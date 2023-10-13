import styles from "./ProductInfo.module.css";
import {formatNumber} from "../../../utils/formatPrice";
import delivery from "./../../../assets/icons/deliveryFill.svg";
import deliveryRus from "./../../../assets/icons/delivery-rus.svg";
import pickup from "./../../../assets/icons/pickup.svg";
import ProductImagesSlider from "./ProductImagesSlider/ProductImagesSlider";
import {useAppDispatch} from "../../../redux/hooks";
import {
    changeIsOpen,
    setIsDeliveryModal,
    setIsDeliveryRusModal,
    setIsPickupModal,
    setIsQueryModal
} from "../../../redux/modal-reducer";
import {useEffect} from "react";

const ProductInfo = ({...props}) => {
    const dispatch = useAppDispatch();
    let product = props.product;

    const openPickupModal = () => {
        dispatch(changeIsOpen(true));
        dispatch(setIsPickupModal(true));
    }

    const openDeliveryModal = () => {
        dispatch(changeIsOpen(true));
        dispatch(setIsDeliveryModal(true));
    }

    const openDeliveryRusModal = () => {
        dispatch(changeIsOpen(true));
        dispatch(setIsDeliveryRusModal(true));
    }

    const openQueryModal = () => {
        dispatch(changeIsOpen(true));
        dispatch(setIsQueryModal(true));
    }

    return (
        <article className={"container"}>
            <h2 className={styles.name}>
                {product.name}
            </h2>
            <div className={styles.columns}>
                <div className={styles.column + " " + styles.imagesColumn}>
                    <ProductImagesSlider key={product.images.join("-")} images={product.images} />
                </div>
                <div className={styles.column}>
                    <div className={styles.prices}>
                        <h3>
                            <strong>{formatNumber(product.retailPrice) + " ₽"}</strong> за шт.
                        </h3>
                        <h3>
                            <strong>{formatNumber(product.wholesalePrice) + " ₽"}</strong> {"за пак " + product.quantityPerPackage + " шт."}
                        </h3>
                    </div>
                    <button onClick={openQueryModal} className={styles.queryButton}>
                        Оставить заявку
                    </button>
                    <div>
                        <h4 className={styles.subtitle}>
                            Информация о доставке
                        </h4>
                        <div>
                            <button onClick={openPickupModal} className={styles.infoButton}>
                                <img src={pickup} alt="Самовывоз"/>
                                <h5>Самовывоз со склада</h5>
                            </button>
                            <button onClick={openDeliveryModal} className={styles.infoButton}>
                                <img src={delivery} alt="Доставка"/>
                                <h5>Доставка по Спб и Лен. обл.</h5>
                            </button>
                            <button onClick={openDeliveryRusModal} className={styles.infoButton}>
                                <img src={deliveryRus} alt="Доставка по России"/>
                                <h5>Доставка по России</h5>
                            </button>
                        </div>
                    </div>
                    <div>
                        <h4 className={styles.subtitle}>
                            Информация об оплате
                        </h4>
                        <p>
                            Оплата осуществляется безналично
                        </p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProductInfo;