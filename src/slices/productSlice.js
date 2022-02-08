import { createSlice } from '@reduxjs/toolkit'

//Variables en donde se almacenaran los datos de las busquedas
const initialState = {
    listProducts: [],
    productDetail: {},
    productDescription:"",

}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

        //Metodo para cargar los datos de la busqueda
        setListProduct: (state, action) => {
            state.listProducts = action.payload
        },

        //Metodo para cargar los datos de la busqueda
        setProductDetail: (state, action) => {
            state.productDetail = action.payload;
        }, 

        setProductDescription: (state, action) => {
            state.productDescription = action.payload;
        }
    },
})

//Se exportan los metodos para poder ser usados globalmente
export const { setListProduct, setProductDetail, setProductDescription } = productSlice.actions

export default productSlice.reducer