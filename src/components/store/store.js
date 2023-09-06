import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth"
import { apiSlice } from "../api/apiSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice.reducer

    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),

    devTools: true
})

export default store