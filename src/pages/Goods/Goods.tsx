import React, {useEffect, useState} from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import {Box} from "@mui/material";
import {categoryApi, useGetCategoryQuery} from "../../store/api/categoryApi";
import { useGetGoodsQuery } from '../../store/api/goodsApi';
import Goods from "../../components/Goods/Goods";
const GoodsPage = () => {
   const params=useParams()
    const {isLoading,data}=useGetCategoryQuery()
    const [isParamFinded,setIsParamFinded]=useState(false)
    const navigator=useNavigate();
   const {data:goods,isLoading:isGoodsLoading}=useGetGoodsQuery({
       category:params.id
   },{
       skip:!isParamFinded
   })
    useEffect(()=>{
        if (!isLoading && data){
       data.some(el=>{
                    if (el.name===params.id) setIsParamFinded(true);
                }
            )
        }
        },[isLoading]
    )


    return (
        <Box>
            {goods && <Goods items={goods.items}/>}
        </Box>
    );
};

export default GoodsPage;
