import styles from "./PriceModule.module.css";
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks";
import {changeSortPriceType} from "../../../../redux/filters-reducer";

const PriceModule = () => {
    const dispatch = useAppDispatch();
    const sortType = useAppSelector(state => state.filters.price.typeSort);

    const onUpperFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSortPriceType(+e.target.value));
    }

    return (
        <>
            <h3 className={styles.title}>Цена, руб</h3>
            <label htmlFor="up" className={styles.custom_checkboxes}>
                <input type="radio" onChange={onUpperFilter} value={1} checked={sortType === 1} name="price" id="up"/>
                <span className={styles.custom_checkboxes_span}></span>
                <span className={styles.text}>По возрастанию цены</span>
            </label>
            <label htmlFor="down" className={styles.custom_checkboxes}>
                <input type="radio" onChange={onUpperFilter} value={2} checked={sortType === 2} name="price" id="down"/>
                <span className={styles.custom_checkboxes_span}></span>
                <span className={styles.text}>По убыванию цены</span>
            </label>
        </>
    )
}

export default PriceModule;