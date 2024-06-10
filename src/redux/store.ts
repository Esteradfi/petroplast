import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories-reducer";
import bannersReducer from "./banners-reducer";
import productsReducer from "./products-reducer";
import modalReducer from "./modal-reducer";
import filtersReducer from "./filters-reducer";
import textsReducer from "./texts-reducer";

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        banners: bannersReducer,
        products: productsReducer,
        filters: filtersReducer,
        modal: modalReducer,
        texts: textsReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;