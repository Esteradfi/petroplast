import type {PayloadAction} from '@reduxjs/toolkit';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import $api from '../http';


export interface ProductsState {
    productsList: Array<ProductsItem> | [],
    selectedCategoryProducts?: Array<ProductsItem> | any,
    sortedVolumeProducts?: Array<Array<ProductsItem>> | any,
    selectedProduct?: ProductsItem,
    isFetching: boolean,
    allFeatures: boolean,
    searchResults: Array<ProductsItem> | [],
    search: string
}

export type ProductsItem = {
    category: string,
    article: string,
    material: string,
    name: string,
    colors: Array<string> | [],
    height: number | string,
    width: number | string,
    length: number | string,
    weightBrutto: number | string,
    weightNetto: number | string,
    retailPrice: number | string,
    wholesalePrice: number | string,
    quantityPerPackage: number | string,
    stockBalance: number | string,
    images: Array<string> | [],
    individualBarcode: string,
    generalBarcode: string,
    description: string,
    volume?: number | string,
    discount?: number | string,
    productHeight?: number | string,
    productWidth?: number | string,
    productLength?: number | string,
    packageHeight?: number | string,
    packageWidth?: number | string,
    packageLength?: number | string,
    __v?: string,
    _id: string
}

const initialState: ProductsState = {
    productsList: [],
    isFetching: true,
    allFeatures: false,
    searchResults: [],
    search: ''
};


export const getProductsThunk = createAsyncThunk(
    'Get products',
    async () => {
        try {
            const response = await $api.get(`/goods`);
            return response.data;
        } catch (err: any) {
            alert(err.response.data.message);
        }
    }
)

export const ProductsSlice = createSlice({
    name: "Products",
    initialState,
    reducers: {
        setSelectedCategoryProducts: (state, action: PayloadAction<string>) => {
            let categoryName = action.payload;
            state.selectedCategoryProducts = [];

            for (let i = 0; i < state.productsList.length; i++) {
                if (state.productsList[i].category === categoryName) {
                    state.selectedCategoryProducts.push(state.productsList[i]);
                }
            }
        },
        sortVolumeProducts: (state, action: PayloadAction<Array<ProductsItem>>) => {
            const groupedProducts: any = [];
            const volumes: number[] = [];
            let products: any = action.payload;

            // Создаем массив уникальных значений объемов
            products.forEach((product: any) => {
                if (!volumes.includes(product.volume)) {
                    volumes.push(product.volume);
                }
            });

            // Группируем товары по объему
            volumes.forEach((volume) => {
                const productsWithSameVolume: any = [];

                products.forEach((product: any) => {
                    if (product.volume === volume) {
                        productsWithSameVolume.push(product);
                    }
                });

                groupedProducts.push(productsWithSameVolume);
            });

            // Сортируем массивы по объему
            groupedProducts.sort((a: any, b: any) => {
                const volumeA = a[0]?.volume || 0;
                const volumeB = b[0]?.volume || 0;

                return volumeA - volumeB;
            });

            state.sortedVolumeProducts = groupedProducts;
        },
        setSelectedProduct: (state, action: PayloadAction<string>) => {
            const productId = action.payload;
            state.selectedProduct = state.productsList.find((product: ProductsItem) => product._id.toLowerCase() === productId.toLowerCase());
        },
        seeAllFeatures: (state, action: PayloadAction<boolean>) => {
            state.allFeatures = action.payload;
        },
        changeSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setSearchResults: (state, action: PayloadAction<Array<ProductsItem>>) => {
            state.searchResults = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductsThunk.fulfilled, (state, action) => {
                if (action.payload) {
                    state.productsList = action.payload.reverse();
                } else {
                    state.productsList = action.payload;
                }
                state.isFetching = false;
            })
    },
});

export default ProductsSlice.reducer;

export const {setSelectedCategoryProducts, sortVolumeProducts, setSelectedProduct, seeAllFeatures, changeSearch, setSearchResults} = ProductsSlice.actions;