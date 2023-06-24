import {configureStore } from "@reduxjs/toolkit"
import UserReducer, {loaduser} from "../contents/UserSlice"
import { productApi } from "../contents/ProductsApi"
import ProductsReducer from "../contents/ProductsSlice"
import CartReducer, {getTotals} from "../contents/CartSlice"

const store = configureStore({
    reducer: {
        user: UserReducer,
        cart: CartReducer,
        products: ProductsReducer,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productApi.middleware)
    }
})

export default store