import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoginResult, Me} from "../../types/authTypes";
const initialState={
    token:'',
    isAuth:false,
    user:{} as Me
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken:(state,action:PayloadAction<string>)=>{
            state.token=action.payload
        },
        setUser:(state,action:PayloadAction<LoginResult>)=>{
            state.user=action.payload.user;
            state.token=action.payload.token
            state.isAuth=true
            localStorage.setItem("token",action.payload.token)
        },
        setMe:(state,action:PayloadAction<Me>)=>{
            state.user=action.payload
            state.isAuth=true
        },
        logOut:(state)=>{
            state.token=""
            state.user={} as Me
            state.isAuth=false
            localStorage.removeItem("token")
        }
    }

});
export const {setToken,setUser,logOut,setMe}=authSlice.actions
export default authSlice.reducer
