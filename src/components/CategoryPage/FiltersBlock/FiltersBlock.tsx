import styles from "./Filter.module.css";
import arrow from "../../../assets/icons/arrow-down.svg";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {
    changeIsOpenColors,
    changeIsOpenPrice,
    changeIsOpenVolume,
    setMinMaxVolume
} from "../../../redux/filters-reducer";
import PriceModule from "./PriceModule/PriceModule";
import VolumeModule from "./VolumeModule/VolumeModule";
import findMinMaxVolume from "../../../utils/minMax";
import {useEffect, useRef} from "react";
import ColorModule from "./ColorModule/ColorModule";

const FiltersBlock = () => {
    const dispatch = useAppDispatch();
    const colorsFilter = useAppSelector(state => state.filters.colors);
    const priceFilter = useAppSelector(state => state.filters.price);
    const volumeFilter = useAppSelector(state => state.filters.volume);
    const categoryProducts = useAppSelector(state => state.products.selectedCategoryProducts);
    let minVolume = useAppSelector(state => state.filters.volume.start);
    let maxVolume = useAppSelector(state => state.filters.volume.end);

    const minMax = () => {
        const minMax = findMinMaxVolume(categoryProducts);
        dispatch(setMinMaxVolume(minMax));
    }

    if (categoryProducts) {
        minMax();
    }

    const changeIsOpenCol = () => {
        dispatch(changeIsOpenColors());
    }

    const changeIsOpenVol = () => {
        dispatch(changeIsOpenVolume());
    }

    const changeIsOpenPr = () => {
        dispatch(changeIsOpenPrice());
    }

    const colorsFilterRef = useRef<HTMLDivElement>(null);
    const volumeFilterRef = useRef<HTMLDivElement>(null);
    const priceFilterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                colorsFilterRef.current &&
                !colorsFilterRef.current.contains(event.target as Node) &&
                colorsFilter.isOpen
            ) {
                dispatch(changeIsOpenColors());
            }

            if (
                volumeFilterRef.current &&
                !volumeFilterRef.current.contains(event.target as Node) &&
                volumeFilter.isOpen
            ) {
                dispatch(changeIsOpenVolume());
            }

            if (
                priceFilterRef.current &&
                !priceFilterRef.current.contains(event.target as Node) &&
                priceFilter.isOpen
            ) {
                dispatch(changeIsOpenPrice());
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [changeIsOpenCol, changeIsOpenVol, changeIsOpenPr]);

    return (
        <>
            <div ref={colorsFilterRef} className={styles.filterWrapper}>
                <button onClick={changeIsOpenCol} className={colorsFilter.isOpen ? styles.filterItemActive + ' ' + styles.filterItem : styles.filterItem}>
                    <h5>
                        Цвет
                    </h5>
                    <img src={arrow} alt="Стрелка" className={colorsFilter.isOpen ? styles.filterImage : ''}/>
                </button>
                {colorsFilter.isOpen && <div> <div className={styles.triangle}></div>
                    <div className={styles.filterBlock}>
                        <ColorModule />
                    </div>
                </div>}
            </div>
            {minVolume !== maxVolume ? <div ref={volumeFilterRef} className={styles.filterWrapper}>
                <button onClick={changeIsOpenVol} className={volumeFilter.isOpen ? styles.filterItemActive + ' ' + styles.filterItem : styles.filterItem}>
                    <h5>
                        Ёмкость
                    </h5>
                    <img src={arrow} alt="Стрелка" className={volumeFilter.isOpen ? styles.filterImage : ''}/>
                </button>
                {volumeFilter.isOpen && <div> <div className={styles.triangle}></div>
                    <div className={styles.filterBlock}>
                        <VolumeModule />
                    </div>
                </div>}
            </div> : null
            }
            <div ref={priceFilterRef} className={styles.filterWrapper}>
                <button onClick={changeIsOpenPr} className={priceFilter.isOpen ? styles.filterItemActive + ' ' + styles.filterItem : styles.filterItem}>
                    <h5>
                        Цена
                    </h5>
                    <img src={arrow} alt="Стрелка" className={priceFilter.isOpen ? styles.filterImage : ''}/>
                </button>
                {priceFilter.isOpen && <div> <div className={styles.triangle}></div>
                    <div className={styles.filterBlock}>
                        <PriceModule />
                    </div>
                </div>}
            </div>
        </>
    )
}

export default FiltersBlock;