import React from 'react';
import {Box, Typography} from "@mui/material";
import MiniCart from "./MiniCart/MiniCart";
import Offers from "./Offers/Offers";
import Goods from "../../pages/Goods/Goods";
const Main = () => {
    return (
        <Box sx={{width:"100%",overflow:"hidden"}}>
           <MiniCart/>
            <Offers/>
            <Box>
                <Typography sx={{mb:1}} variant={"h5"}>
                    Last viewed goods
                </Typography>
                <Goods/>
            </Box>
        </Box>
    );
};
export default Main;
