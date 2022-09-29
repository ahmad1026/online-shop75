import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addProductApi } from "../../api/addProduct";
import { getCategores } from "../../api/getCategores.api";
import {getProduct} from '../../api/getProducts.api'


export const addProduct = createAsyncThunk('products/addProduct', async (newProduct) => {


    console.log(newProduct);
    const response = await addProductApi(newProduct)

    return response

})

export const getCategories = createAsyncThunk('products/getCategories', async () => {

    const categoreis = await getCategores()

    return categoreis
})

export const editProductApi = createAsyncThunk('products/getProduct' , async(productId)=>{

    const product = await getProduct(productId)
    return product
})

// export const editProductApi = createAsyncThunk('products/editProducts' , async(productId , newForm)=>{

//     const product = await editProduct(productId , newForm )

//     return product
// } )

const initialState = {
    editeStatus: false,
    modalStatus: false,
    addProductStatus:'',
    categoreis: null,
    product: null,
    errors: null
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        handleProductModal: (state, action) => {
            state.modalStatus = !state.modalStatus
            state.errors = null
            state.editeStatus = false
            state.product = null
        },
        handleProductErrors:(state , action) =>{
            state.errors = action.payload
        }

    },
    extraReducers: {
        [getCategories.fulfilled]: (state, action) => {
            state.categoreis = action.payload
        },
        [addProduct.pending]:(state,action)=>{
            state.addProductStatus = 'pending'
        },
        [addProduct.fulfilled]:(state , action)=>{
            state.addProductStatus = 'idel'
            state.modalStatus = false
        },
        [addProduct.rejected]:(state , action)=>{
            state.addProductStatus = 'error'
        },
        [editProductApi.fulfilled]:(state , action)=>{
            state.editeStatus = true
            state.product = action.payload
            state.modalStatus = true
        }

    }

})

export const { handleProductModal,handleProductErrors } = productSlice.actions

export default productSlice.reducer