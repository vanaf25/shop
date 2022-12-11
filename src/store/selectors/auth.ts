import {RootState} from "../store";

export const getIsAuth=(state:RootState)=>state.auth.isAuth
export const getToken=(state:RootState)=>state.auth.token
