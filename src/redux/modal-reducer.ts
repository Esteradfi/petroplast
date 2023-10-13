import type {PayloadAction} from '@reduxjs/toolkit';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {$apiMail} from "../http";

export interface ModalState {
    isOpen: boolean;
    isQueryModal: boolean,
    isPickupModal: boolean,
    isDeliveryModal: boolean,
    isDeliveryRusModal: boolean,
    isFetching: boolean
}

export type NewQuery = {
    id?: string,
    username?: string,
    password?: string,
    name: string,
    email: string,
    phoneNumber: string,
    comment?: string,
    isLegalEntity: boolean,
    salesChannel: string
};

const initialState: ModalState = {
    isOpen: false,
    isQueryModal: false,
    isPickupModal: false,
    isDeliveryModal: false,
    isDeliveryRusModal: false,
    isFetching: false
};

export const postNewQueryThunk = createAsyncThunk(
    'Post query',
    async (data: NewQuery) => {
        try {
            const response = await $apiMail.post('/mail', data);
            console.log(response)
            return response.data;
        }
        catch (err: any) {
            alert(err.response.data.message);
        }
    }
)

export const ModalSlice = createSlice({
    name: "Modal",
    initialState,
    reducers: {
        changeIsOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        },
        setIsQueryModal: (state, action: PayloadAction<boolean>) => {
            state.isQueryModal = action.payload;
        },
        setIsPickupModal: (state, action: PayloadAction<boolean>) => {
            state.isPickupModal = action.payload;
        },
        setIsDeliveryModal: (state, action: PayloadAction<boolean>) => {
            state.isDeliveryModal = action.payload;
        },
        setIsDeliveryRusModal: (state, action: PayloadAction<boolean>) => {
            state.isDeliveryRusModal = action.payload;
        },
        clearModal: (state) => {
            state.isOpen = false;
            state.isQueryModal = false;
            state.isPickupModal = false;
            state.isDeliveryModal = false;
            state.isDeliveryRusModal = false;
        },
        changeIsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(postNewQueryThunk.fulfilled, (state, action) => {
                state.isOpen = false;
                state.isQueryModal = false;
                state.isFetching = false
            })
    },
});

export default ModalSlice.reducer;

export const {
    changeIsOpen,
    setIsDeliveryRusModal,
    setIsPickupModal,
    setIsQueryModal,
    setIsDeliveryModal,
    clearModal,
    changeIsFetching
} = ModalSlice.actions;