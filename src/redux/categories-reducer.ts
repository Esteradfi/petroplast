import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import $api from '../http';


export interface CategoriesState {
    categoriesList: Array<CategoriesItem> | [],
    isFetching: boolean,
    isOpen: boolean,
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
            if(action.payload) {
                state.categoriesList = action.payload.reverse();
            } else {
                state.categoriesList = action.payload;
            }
            state.isFetching = false;
        })
    },
});

export default CategoriesSlice.reducer;

export const {changeIsOpenCatalog} = CategoriesSlice.actions;