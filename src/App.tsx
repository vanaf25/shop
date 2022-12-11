import React, {useEffect} from 'react';
import './App.css';
import {Box} from "@mui/material";
import Header from "./Header/Header";
import Main from "./components/Main/Main";
import {Route,Routes } from 'react-router-dom';
import Goods from "./pages/Goods/Goods";
import SideBar from "./components/SideBar/SideBar";
import Product from "./pages/Product/Product";
import GetParameterPopups from "./components/GetParameterPopup";
import { useGetMeQuery } from './store/api/authApi';
import {useAppDispatch, useAppSelector} from "./store/store";
import {getToken} from "./store/selectors/auth";
import  {setToken} from './store/slices/authSlice'
function App() {
    const dispatch=useAppDispatch()
    const token=useAppSelector(getToken);
    useEffect(()=>{
        const token=localStorage.getItem("token");
        if (token) dispatch(setToken(token))
    },[])
    const {data,isLoading}=useGetMeQuery(null, {skip:!token})
  return (
    <>
        <Header/>
        <Box sx={{display:"flex",mt:10}}>
            <SideBar/>
            <Box sx={{flex:"1 1 auto",pl:2}}>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path={"/:id"} element={<Goods/>}/>
                    <Route path={"/products/:id/"} element={<Product/>}>
                        <Route path={":tab/*"} element={<Product/>} />
                    </Route>
                </Routes>
            </Box>
        </Box>
        <GetParameterPopups/>
    </>
  );
}
export default App;
