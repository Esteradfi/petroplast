import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories-reducer";
import bannersReducer from "./banners-reducer";
import productsReducer from "./products-reducer";

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        banners: bannersReducer,
        products: productsReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;