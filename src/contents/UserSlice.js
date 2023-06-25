import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import jwtDecode from "jwt-decode"
import {toast} from "react-toastify"

export const registerUser = createAsyncThunk("auth/registerUser", async( user, {rejectedWithValue})=> {
    try{
        const token = await axios.post(
          "https://snacky-server.onrender.com/api/v1/register",
          {
            name: user.name,
            email: user.email,
            password: user.password,
          }
        );
        localStorage.setItem("token", token.data)
        toast.success("Registered Successfully", {
          position: "bottom-left",
        });
        return token.data
    }catch(err){
        console.log(err.response.data)
        toast.error(err.response.data)
        return rejectedWithValue(err.response.data)
    }
})

export const loginUser = createAsyncThunk("auth/loginUser", async(user, {rejectedWithValue} )=> {
    try{
        const token = await axios.post("https://snacky-server.onrender.com/api/v1/login", {
            email: user.email,
            password: user.password
        })
        localStorage.setItem("token", token.data)
        return token.data
    }catch(err){
        console.log(err.response.data)
        return rejectedWithValue(err.response.data)
    }
})

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
    name: 'auth',
    initialState,
    reducers: {
        logoutUser(state, action){
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
        },
        loaduser(state, action) {
            const token = state.token

            if(token){
                const user = jwtDecode(token);

                return{
                    ...state,
                    token,
                    name: user.name,  
                    email: user.email,
                    _id: user._id,
                    userLoaded: true
                }
                
            }
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
            } else return state
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
                  token: action.payload,
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

export const {logout, loaduser} = userSlice.actions;
export default userSlice.reducer;