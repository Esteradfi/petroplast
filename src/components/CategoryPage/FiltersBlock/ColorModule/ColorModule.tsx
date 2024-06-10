import styles from "./ColorModule.module.css";
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks";
import ColorItem from "./ColorItem/ColorItem";
import {changeSortPriceType, clearColors, setSelectedColors} from "../../../../redux/filters-reducer";

const ColorModule = () => {
    const dispatch = useAppDispatch();
    let colorsList = useAppSelector(state => state.filters.colors.colorsList);
    let colorItems = colorsList.map((el: string) => <ColorItem key={el} el={el} />);
    const isPriceSort = useAppSelector(state => state.filters.price);
    const selectedColors = useAppSelector(state => state.filters.colors.selectedColors);

    const onClear = () => {
        dispatch(clearColors());
    }

    const onSave = () => {
        if (isPriceSort.isSelected) {
            dispatch(changeSortPriceType(isPriceSort.typeSort));
        }
        dispatch(setSelectedColors(selectedColors));
    }

    return (
        <>
            <div className={styles.colorBlock}>
                {colorItems}
            </div>
            <div className={styles.buttonsBlock}>
                <button onClick={onClear} className={styles.colorReset} type="button">
                    Сбросить
                </button>
                <button onClick={onSave} className={styles.colorSave} type="button">
                    Сохранить
                </button>
            </div>
        </>
    )
}

export default ColorModule;