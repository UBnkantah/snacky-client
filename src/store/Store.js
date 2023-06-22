import {configureStore } from "@reduxjs/toolkit"
import UserReducer from "../contents/UserSlice"
import { productApi } from "../contents/ProductsApi"

const store = configureStore({
    reducer: {
        user: UserReducer,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productApi.middleware)
    }
})

export default store