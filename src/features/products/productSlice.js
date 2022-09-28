import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { addProductApi } from "../../api/addProduct";






export const addProduct = createAsyncThunk('products/addProduct', async(newProduct)=>{

    const response = await addProductApi(newProduct)

    return response

})









const initialState = {
    status:'idle',
    titeErorr:'',
    error:null
}

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:{
        
    }

})