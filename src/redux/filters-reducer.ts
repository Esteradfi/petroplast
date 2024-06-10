import {ProductsItem} from "./products-reducer";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface FiltersState {
    products: Array<ProductsItem> | [],
    filterProducts: Array<ProductsItem> | [],
    volume: VolumeFilter,
    price: PriceFilter,
    colors: ColorsFilter,
}

type VolumeFilter = {
    isOpen: boolean,
    isSelected: boolean,
    start: number,
    end: number,
    curStart: number,
    curEnd: number,
}

type PriceFilter = {
    isOpen: boolean,
    isSelected: boolean,
    typeSort: 0 | 1 | 2
}

type ColorsFilter = {
    isOpen: boolean,
    isSelected: boolean
    colorsList: Array<string>,
    selectedColors: Array<string> | any,
    setedColors: Array<string> | any,
}

const initialState: FiltersState = {
    products: [],
    filterProducts: [],
    volume: {
        isOpen: false,
        isSelected: false,
        start: 0,
        curStart: 0,
        end: 0,
        curEnd: 0
    },
    price: {
        isOpen: false,
        isSelected: false,
        typeSort: 0
    },
    colors: {
        isOpen: false,
        isSelected: false,
        colorsList: ['Белый', 'Черный', 'Графитовый', 'Розовый', 'Фисташковый', 'Коралловый', 'Коричневый', 'Темно-коричневый', 'Бежевый', 'Сиреневый', 'Синий', 'Голубой', 'Желтый', 'Серый', 'Терракотовый', 'Белый мрамор', 'Бирюзовый', 'Оливковый', 'Красный', 'Зеленый', 'Оранжевый', 'Фиолетовый', 'Бесцветный', 'Другой цвет'],
        selectedColors: [],
        setedColors: []
    }
};

export const FiltersState = createSlice({
    name: "Filters",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Array<ProductsItem>>) => {

            state.products = action.payload;
            state.filterProducts = action.payload;
        },
        changeColors: (state, action: PayloadAction<string>) => {
            let actionColor = action.payload;
            let indexColor = state.colors.selectedColors.indexOf(actionColor);
            if(indexColor !== -1) {
                state.colors.selectedColors.splice(indexColor, 1);
            } else {
                state.colors.selectedColors.push(actionColor);
            }
        },
        clearColors: (state) => {
            state.colors.selectedColors = [];
        },
        changeIsOpenVolume: (state) => {
            if (state.volume.isOpen) {
                state.volume.isOpen = false;
            } else {
                state.volume.isOpen = true;
                state.price.isOpen = false;
                state.colors.isOpen = false;
            }
        },
        changeIsOpenPrice: (state) => {
            if (state.price.isOpen) {
                state.price.isOpen = false;
            } else {
                state.price.isOpen = true;
                state.volume.isOpen = false;
                state.colors.isOpen = false;
            }
        },
        changeIsOpenColors: (state) => {
            if (state.colors.isOpen) {
                state.colors.isOpen = false;
                if (state.colors.isSelected) {

                }
            } else {
                state.colors.isOpen = true;
                state.price.isOpen = false;
                state.volume.isOpen = false;
            }
        },
        setMinMaxVolume: (state, action: PayloadAction<Array<number>>) => {
            state.volume.start = action.payload[0];
            state.volume.end = action.payload[1];
        },
        setCurVolume: (state, action: PayloadAction<Array<number>>) => {
            state.volume.curStart = action.payload[0];
            state.volume.curEnd = action.payload[1];

            state.volume.isSelected = true;

            state.filterProducts = state.products.filter((product: any) =>
                product.volume >= state.volume.curStart &&
                product.volume <= state.volume.curEnd &&
                (state.colors.isSelected ?
                    state.colors.selectedColors.some((color: string) => product.colors.includes(color)) :
                    true)
            );
        },
        setSelectedColors: (state, action: PayloadAction<Array<string>>) => {
            state.colors.selectedColors = action.payload;
            state.colors.isSelected = action.payload.length !== 0;

            state.filterProducts = state.products.filter((product: any) =>
                (state.volume.isSelected ?
                    product.volume >= state.volume.curStart &&
                    product.volume <= state.volume.curEnd :
                    true) &&
                (state.colors.isSelected ?
                    state.colors.selectedColors.some((color: string) => product.colors.includes(color)) :
                    true)
            );
        },
        changeSortPriceType: (state, action: PayloadAction<number>) => {
            state.price.isSelected = true;
            if (!state.filterProducts) {
                if (action.payload === 1) {
                    state.price.typeSort = 1;
                    state.filterProducts = state.products.slice().sort((a: any, b: any) => a.retailPrice - b.retailPrice);
                } else if (action.payload === 2) {
                    state.price.typeSort = 2;
                    state.filterProducts = state.products.slice().sort((a: any, b: any) => b.retailPrice - a.retailPrice);
                } else {
                    state.price.typeSort = 0;
                    state.filterProducts = state.products;
                }
            } else {
                if (action.payload === 1) {
                    state.price.typeSort = 1;
                    state.filterProducts.sort((a: any, b: any) => a.retailPrice - b.retailPrice);
                } else if (action.payload === 2) {
                    state.price.typeSort = 2;
                    state.filterProducts.sort((a: any, b: any) => b.retailPrice - a.retailPrice);
                }
            }

        },
        clearAllFilters: (state) => {
            state.volume = {
                isOpen: false,
                isSelected: false,
                start: 0,
                curStart: 0,
                end: 0,
                curEnd: 0
            };

            state.price = {
                isOpen: false,
                isSelected: false,
                typeSort: 0
            };

            state.colors = {
                isOpen: false,
                isSelected: false,
                colorsList: ['Белый', 'Черный', 'Графитовый', 'Розовый', 'Фисташковый', 'Коралловый', 'Коричневый', 'Темно-коричневый', 'Бежевый', 'Сиреневый', 'Синий', 'Голубой', 'Желтый', 'Серый', 'Терракотовый', 'Белый мрамор', 'Бирюзовый', 'Оливковый', 'Красный', 'Зеленый', 'Оранжевый', 'Фиолетовый', 'Бесцветный', 'Другой цвет'],
                selectedColors: [],
                setedColors: []
            }
        }
    }
})

export default FiltersState.reducer;

export const {
    setProducts,
    changeIsOpenVolume,
    changeIsOpenPrice,
    changeIsOpenColors,
    clearAllFilters,
    changeSortPriceType,
    setMinMaxVolume,
    setCurVolume,
    changeColors,
    clearColors,
    setSelectedColors
} = FiltersState.actions;