import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../features/auth/authSlice.js'
import productSlice from "../features/products/productSlice.js";
const store = configureStore({
    reducer:{
        auth: authSlice,
        products:productSlice
    }
})

export default store