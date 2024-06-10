import Slider from '@mui/material/Slider';
import React, {useEffect, useState} from "react";
import styles from "./VolumeModule.module.css";
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks";
import {changeSortPriceType, setCurVolume} from "../../../../redux/filters-reducer";

const VolumeModule = () => {
    const dispatch = useAppDispatch();
    let minVolume = useAppSelector(state => state.filters.volume.start);
    let maxVolume = useAppSelector(state => state.filters.volume.end);
    const isPriceSort = useAppSelector(state => state.filters.price);


    function valuetext(value: number) {
        return `${value}`;
    }

    const minDistance = 0.125;

    const curMinVolume = useAppSelector(state => state.filters.volume.curStart) || minVolume;
    const curMaxVolume = useAppSelector(state => state.filters.volume.curEnd) || maxVolume;


    const [value, setValue] = useState([curMinVolume || minVolume, curMaxVolume || maxVolume]);

    let timer: ReturnType<typeof setTimeout>;

    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        let updatedValue = [...value]; // Создаем копию текущего значения

        if (activeThumb === 0) {
            updatedValue[0] = Math.min(newValue[0], value[1] - minDistance);
        } else {
            updatedValue[1] = Math.max(newValue[1], value[0] + minDistance);
        }

        setValue(updatedValue); // Устанавливаем скорректированное значение в состояние

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            dispatch(setCurVolume(updatedValue));

            if (isPriceSort.isSelected) {
                dispatch(changeSortPriceType(isPriceSort.typeSort));
            }
        }, 500);
    };

    return (
        <>
            <h3 className={styles.title}>Ёмкость, л</h3>
            <Slider
                className={styles.slider}
                min={minVolume}
                max={maxVolume}
                step={0.125}
                getAriaLabel={() => 'Minimum distance'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
            />
            <div className={styles.inputs}>
                <div className={styles.inputBlock}>
                    <label className={styles.label} htmlFor="min">от</label>
                    <input className={styles.input} disabled id="min" type="text" value={value[0]}/>
                </div>
                <div className={styles.inputBlock}>
                    <label className={styles.label} htmlFor="max">до</label>
                    <input className={styles.input} disabled id="max" type="text" value={value[1]}/>
                </div>
            </div>
        </>
    )
}

export default VolumeModule;