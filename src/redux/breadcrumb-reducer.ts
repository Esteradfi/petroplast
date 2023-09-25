import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface Breadcrumb {
    label: string;
    path: string;
}

interface BreadcrumbsState {
    breadcrumbs: Breadcrumb[];
}

const initialState: BreadcrumbsState = {
    breadcrumbs: []
};

export const CategoriesSlice = createSlice({
    name: "Categories",
    initialState,
    reducers: {
        changeTitle: (state, action: PayloadAction<string>) => {

        }
    },
});

export default CategoriesSlice.reducer;

export const {changeTitle} = CategoriesSlice.actions;