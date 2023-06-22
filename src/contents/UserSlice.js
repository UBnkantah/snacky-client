import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import jwtDecode from "jwt-decode"

export const registerUser = createAsyncThunk("auth/registerUser", (async( user, {rejectedWithValue})=> {
    try{
        const token = await axios.post("http://localhost:2023/register", {
            name: user.name,
            email: user.email,
            password: user.password
        })
        localStorage.setItem("token", token.data)
        return token.data
    }catch(err){
        console.log(err.response.data)
        return rejectedWithValue(err.response.data)
    }
}))

export const loginUser = createAsyncThunk("auth/loginUser", (async(user, {rejectedWithValue} )=> {
    try{
        const token = await axios.post("http://localhost:2023/login", {
            email: user.email,
            password: user.password
        })
        localStorage.setItem("token", token.data)
        return token.data
    }catch(err){
        console.log(err.response.data)
        return rejectedWithValue(err.response.data)
    }
}))

const initialState = {
    token: localStorage.getItem("token"),
    name: "",
    email: "",
    _id: "",
    registerStatus: "",
    registerError: "",
    loginStatus: "",
    loginError: "",
    userLoaded: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout (state){
            localStorage.removeItem("token")

            return {
              ...state,
              name: "",
              email: "",
              _id: "",
              registerStatus: "",
              registerError: "",
              loginStatus: "",
              loginError: "",
              userLoaded: false,
            };
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            return {...state, registerStatus: "pending"}
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            if (action.payload){
                const user = jwtDecode(action.payload)

                return {
                    ...state,
                    token: action.payload,
                    name: user.name,
                    email: user.email,
                    _id: user._id,
                    registerStatus: "success"
                }
            }else{
                return state
            }
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            return {
                ...state,
                registerStatus: "rejected",
                registerError: action.payload
            }
        })
        builder.addCase(loginUser.pending, (state) => {
            return {...state, loginStatus: "pending"}
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if(action.payload){
                const user = jwtDecode(action.payload)
                return {
                  ...state,
                  name: user.name,
                  email: user.email,
                  _id: user._id,
                  loginStatus: "success",
                };
            }else return state
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            return{
                ...state,
                loginStatus: "rejected",
                loginError: action.payload
            }
        })
    }
})

export const {logout} = userSlice.actions;
export default userSlice.reducer;