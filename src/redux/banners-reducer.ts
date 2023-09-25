import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import $api from '../http';

export interface BannersState {
    bannersList: Array<Banner> | [],
    isFetching: boolean
}
export type BannerImage = {
    image: string;
}

export type Banner = {
    links: Array<string>,
    __v: string,
    _id: string
}

const initialState: BannersState = {
    bannersList: [],
    isFetching: true
}

export const getBannersThunk = createAsyncThunk(
    'Get Banners',
    async () => {
        try {
            const response = await $api.get(`/baners`);
            return response.data;
        } catch (err: any) {
            alert(err.response.data.message);
        }
    }
)

export const BannersSlice = createSlice({
    name: "Banners",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getBannersThunk.fulfilled, (state, action) => {
                state.bannersList = action.payload;
                state.isFetching = false
            })
    }
})

export default BannersSlice.reducer;

export const {} = BannersSlice.actions;