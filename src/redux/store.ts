import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories-reducer";
import bannersReducer from "./banners-reducer";

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        banners: bannersReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;