import {useAppDispatch, useAppSelector} from "../../../../redux/hooks";
import emptyImage from "./../../../../assets/images/emptyImage.jpg";
import {useEffect} from "react";
import {setSelectedImage} from "../../../../redux/products-reducer";
import styles from "./ProductImages.module.css";

const ProductImages = ({...props}) => {
    const dispatch = useAppDispatch();
    let selectedImage = useAppSelector(state => state.products.selectedImage);
    let images = props.images;

    useEffect(() => {
        if (images.length)
        dispatch(setSelectedImage(images[0]));
    }, [images])

    console.log(images)

    return (
        <>
            <div className={styles.column}>

            </div>
            <div className={styles.column}>
                <img src={selectedImage || emptyImage} alt="Фото товара"/>
            </div>
        </>
    )
}

export default ProductImages;