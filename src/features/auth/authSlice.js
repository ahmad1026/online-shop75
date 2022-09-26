import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Login } from '../../api/userLogin.api'

const initialState = {
    token: "",
    userName: "",
    loginStatus: "",
    loginMassage: ""
}


export const loginUser = createAsyncThunk("auth/loginUser", async (formData, { rejectWithValue }) => {

    try {
        const token = await Login(formData)

        return token

    } catch (err) {

        console.log(err);
        return rejectWithValue(err.response.data)

    }

})


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: {
        [loginUser.pending]: (state, action) => {
            state.loginStatus = "pending"

        },
        [loginUser.fulfilled]: (state, action) => {
            if (action.payload) {
                state.userName = action.payload.username
                state.token = action.payload.token
                state.loginStatus = true

            } else {
                return state
            }

        },
        [loginUser.rejected]: (state, action) => {
            state.loginStatus = false
        }
    }
    // (builder)=>{
    //     builder
    //     .addCase(loginUser.pending , (state  , action)=>{
    //         state.loginStatus = "pending"

    //     })
    //     .addCase(loginUser.fulfilled , (state  , action)=>{
    //         if(action.payload){
    //             state.userName = action.payload.username
    //             state.token = action.payload.token
    //             state.loginStatus = true

    //         }else{
    //             return state
    //         }

    //     })
    //     .addCase(loginUser.rejected , (state  , action)=>{
    //         state.loginStatus = false
    //     })

    // }
})

export default authSlice.reducer