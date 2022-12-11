import React from 'react';
import {Box, Stack} from "@mui/material";
import Item from "./Item/Item";
import { useParams } from 'react-router-dom';
import {Product} from "../../types/goodsTypes";
interface GoodsProps {
    items:Product[]
}
const Goods:React.FC<GoodsProps> = ({items}) => {
    return (
        <Box sx={{flexWrap:"wrap",display:"flex"}}>
            {items.map(item=><Item key={item.id} item={item} />)}
        </Box>
    );
};
export default Goods;
