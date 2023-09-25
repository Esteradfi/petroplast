import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import $api from '../http';


export interface CategoriesState {
    categoriesList: Array<CategoriesItem> | [],
    isFetching: boolean
};

export type CategoriesItem = {
    checkbox: boolean,
    name: string,
    image: string,
    _id: string,
    __v: string,
}

const initialState: CategoriesState = {
    categoriesList: [],
    isFetching: true
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
        changeSelectedCategory: (state, action: PayloadAction<string>) => {
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCategoriesThunk.fulfilled, (state, action) => {
            if(action.payload) {
                state.categoriesList = action.payload.reverse();
                console.log(state.categoriesList)
            } else {
                state.categoriesList = action.payload;
            }
            state.isFetching = false;
        })
    },
});

export default CategoriesSlice.reducer;

export const {} = CategoriesSlice.actions;