import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../store/api/goodsApi';
import {Box, Rating, Typography} from "@mui/material";
import ProductTabs from "./ProductTabs/ProductTabs";

const Product = () => {
    const {id=0,tab}=useParams<{id:string,tab?:string}>();
    const {data,isLoading}=useGetProductQuery(+id,{skip:!+id})
    return (
        <>
            {!isLoading && data ? <Box sx={{width:"100%"}}>
                <Typography variant={"h4"} >{data.name}</Typography>
                <Box sx={{display:"flex",mb:1}}>
                    <Rating sx={{mr:1}} readOnly defaultValue={data.rating}/>
                    <Typography>{data.countOfComments} comments</Typography>
                </Box>
                <Box sx={{display:"flex"}}>
                    <ProductTabs  data={data}/>
                </Box>
            </Box>:"" }
        </>
    );
};
export default Product;
