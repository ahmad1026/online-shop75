import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { Login } from '../../api/userLogin.api'
import { createAsyncThunk } from "@reduxjs/toolkit";


export const loginUser = createAsyncThunk('users/loginUsers', async () => {

    const response = await Login()


    return response

})


const userAdapter = createEntityAdapter()



export const userSlice = createSlice({
    name: "user",
    initialState: {
      username: "",
      status:"idle",
      isFetching: false,
      isSuccess: false,
      isError: false,
      errorMessage: "",
    },
    reducers: {
      // Reducer comes here
    },
    extraReducers: {
      // Extra reducer comes here
      [loginUser.pending]:(action , state)=>{
        state.status = "loading"
      },
    },
  })

