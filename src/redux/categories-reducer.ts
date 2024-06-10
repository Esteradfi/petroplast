import type {PayloadAction} from '@reduxjs/toolkit';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import $api from '../http';


export interface CategoriesState {
    categoriesList: Array<CategoriesItem> | [],
    galleryList: Array<GalleryItem> | [],
    isFetching: boolean,
    isOpen: boolean,
}

export type GalleryItem = {
    category: string,
    image: any,
    _id?: string
    __v?: any,
}

export type CategoriesItem = {
    checkbox: boolean,
    name: string,
    image: string,
    _id: string,
    __v: string,
}

const initialState: CategoriesState = {
    categoriesList: [],
    galleryList: [],
    isFetching: true,
    isOpen: false,
};


export const getCategoriesThunk = createAsyncThunk(
    'Get categories',
    async () => {
        try {
            const response = await $api.get(`/categories`);
            return response.data;
        } catch (err: any) {
            alert(err.response.data.message);
        }
    }
)

export const getGalleryThunk = createAsyncThunk(
    'Get Gallery',
    async (category: string) => {
        try {
            const response = await $api.get(`/gallery/${category}`);
            return response.data;
        } catch (err: any) {
            if (err.response.data.message !== "Фотографии не найдены") {
                console.log(err.response.data.message);
            }
        }
    }
)

export const CategoriesSlice = createSlice({
    name: "Categories",
    initialState,
    reducers: {
        changeIsOpenCatalog: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategoriesThunk.fulfilled, (state, action) => {
                if (action.payload) {
                    state.categoriesList = action.payload.reverse();
                } else {
                    state.categoriesList = action.payload;
                }
                state.isFetching = false;
            })
            .addCase(getGalleryThunk.fulfilled, (state, action) => {
                state.galleryList = action.payload;
        })
    },
});

export default CategoriesSlice.reducer;

export const {changeIsOpenCatalog} = CategoriesSlice.actions;