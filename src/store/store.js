import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../slices/productSlice'

//Creacion de un store basico global 
export const store = configureStore({
    reducer: {
        product: productReducer
    },
})

