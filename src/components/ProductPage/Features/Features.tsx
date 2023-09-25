import styles from "./Features.module.css";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {seeAllFeatures} from "../../../redux/products-reducer";
import {useEffect} from "react";

const Features = ({...props}) => {
    const dispatch = useAppDispatch();

    let product = props.product;
    let isAllFeatures = useAppSelector(state => state.products.allFeatures);

    useEffect(() => {
        dispatch(seeAllFeatures(false));
    }, [])

    const openAllFeatures = () => {
        dispatch(seeAllFeatures(true));
    }

    return (
        <article className={"container " + styles.features}>
            <div className={styles.featuresBlock}>
                <h3 className={styles.title}>
                    Характеристики
                </h3>
                <ul className={styles.featuresList}>
                    <li className={styles.featuresItem}>
                        <span>
                            Цвет
                        </span>
                        <span>
                            {product.colors.join(', ').toLowerCase()}
                        </span>
                    </li>
                    {
                        product.length > 0 && <li className={styles.featuresItem}>
                        <span>
                            Длина изделия
                        </span>
                            <span>
                            {product.length} см
                        </span>
                        </li>
                    }
                    {
                        product.width > 0 && <li className={styles.featuresItem}>
                        <span>
                            Ширина изделия
                        </span>
                            <span>
                            {product.width} см
                        </span>
                        </li>
                    }
                    {
                        product.height > 0 && <li className={styles.featuresItem}>
                        <span>
                            Высота изделия
                        </span>
                            <span>
                            {product.height} см
                        </span>
                        </li>
                    }
                    {
                        product.weightNetto > 0 && <li className={styles.featuresItem}>
                        <span>
                            Вес товара нетто
                        </span>
                            <span>
                            {product.weightNetto < 1 ? product.weightNetto * 1000 + " г" : product.weightNetto + " кг"}
                        </span>
                        </li>
                    }
                    { !isAllFeatures &&
                        <li onClick={openAllFeatures} className={styles.moreFeatures}>
                            Читать полное описание
                        </li>
                    }
                    {
                        product.packageLength > 0 && isAllFeatures && <li className={styles.featuresItem}>
                            <span>
                                Длина упаковки
                            </span>
                            <span>
                            {product.packageLength + " см"}
                            </span>
                        </li>
                    }
                    {
                        product.packageWidth > 0 && isAllFeatures && <li className={styles.featuresItem}>
                            <span>
                                Ширина упаковки
                            </span>
                            <span>
                            {product.packageWidth + " см"}
                            </span>
                        </li>
                    }
                    {
                        product.packageHeight > 0 && isAllFeatures && <li className={styles.featuresItem}>
                            <span>
                                Высота упаковки
                            </span>
                            <span>
                            {product.packageHeight + " см"}
                            </span>
                        </li>
                    }
                    {
                        product.weightBrutto > 0 && isAllFeatures && <li className={styles.featuresItem}>
                        <span>
                            Вес упаковки брутто
                        </span>
                            <span>
                            {product.weightBrutto < 1 ? product.weightBrutto * 1000 + " г" : product.weightBrutto + " кг"}
                        </span>
                        </li>
                    }
                    {
                        product.quantityPerPackage && isAllFeatures && <li className={styles.featuresItem}>
                        <span>
                            Кол-во шт в упаковке
                        </span>
                            <span>
                            {product.quantityPerPackage + " шт"}
                        </span>
                        </li>
                    }
                    {
                        product.article && isAllFeatures && <li className={styles.featuresItem}>
                        <span>
                            Артикул
                        </span>
                            <span>
                            {product.article}
                        </span>
                        </li>
                    }
                    {
                        product.volume > 0 && isAllFeatures && <li className={styles.featuresItem}>
                        <span>
                            Ёмкость
                        </span>
                            <span>
                            {product.volume < 1 ? product.volume * 1000 + " мл" : product.volume + " л"}
                        </span>
                        </li>
                    }
                    {
                        product.material && isAllFeatures && <li className={styles.featuresItem}>
                        <span>
                            Материал
                        </span>
                            <span>
                            {product.material.toLowerCase()}
                        </span>
                        </li>
                    }
                    {
                        product.individualBarcode > 0 && isAllFeatures && <li className={styles.featuresItem}>
                        <span>
                            Штрихкод индивидуальный
                        </span>
                            <span>
                            {product.individualBarcode}
                        </span>
                        </li>
                    }
                    {
                        product.generalBarcode > 0 && isAllFeatures && <li className={styles.featuresItem}>
                        <span>
                            Штрихкод групповой
                        </span>
                            <span>
                            {product.generalBarcode}
                        </span>
                        </li>
                    }
                </ul>
            </div>
            <div className={styles.featuresBlock}>
                <h3 className={styles.title}>
                    Описание товара
                </h3>
                <p className={styles.description}>
                    {product.description}
                </p>
            </div>
        </article>
    )
}

export default Features;