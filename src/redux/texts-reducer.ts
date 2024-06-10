import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import $api from '../http';

export interface TextsState {
    deliveryPageContent: {
        pickupContent: Content,
        deliveryContent: Content,
        deliveryRusContent: Content,
        paymentContent: Content,
    },
}

export type Content = {
    text: string,
    type: string,
    _id: string,
    __v?: number
}

const initialState: TextsState = {
    deliveryPageContent: {
        pickupContent: {
            text: '',
            type: 'delivery.warehouse',
            _id: '',
        },
        deliveryContent: {
            text: '',
            type: 'delivery.region',
            _id: '',
        },
        deliveryRusContent: {
            text: '',
            type: 'delivery.country',
            _id: '',
        },
        paymentContent: {
            text: '',
            type: 'payment.information',
            _id: '',
        }
    }
}

export const getTextsThunk = createAsyncThunk(
    'Get texts',
    async () => {
        try {
            const response = await $api.get(`/texts`);
            return response.data;
        } catch (err: any) {
            throw err;
        }
    }
)

export const TextsSlice = createSlice({
    name: "Banners",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getTextsThunk.fulfilled, (state, action) => {
                if (action.payload) {
                    state.deliveryPageContent.pickupContent.text = action.payload.find((text: Content) => text.type === 'delivery.warehouse').text || '';
                    state.deliveryPageContent.deliveryContent.text = action.payload.find((text: Content) => text.type === 'delivery.region').text || '';
                    state.deliveryPageContent.deliveryRusContent.text = action.payload.find((text: Content) => text.type === 'delivery.country').text || '';
                    state.deliveryPageContent.paymentContent.text = action.payload.find((text: Content) => text.type === 'payment.information').text || '';
                }
            })
    }
})

export default TextsSlice.reducer;

export const {} = TextsSlice.actions;