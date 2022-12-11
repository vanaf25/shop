import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import {ExtendProduct} from "../../../../types/goodsTypes";

const TabSideBar:React.FC<{data:ExtendProduct}> = ({data}) => {
    return (
        <Box>
            <Box sx={{display:"flex",border:1,p:1,alignItems:"center",mb:1,width:350,flex:"1 1 350px"}}>
                <img style={{marginRight:10}} width={80} height={65}  src={data.mainPhoto} alt={data.name}/>
                <Typography variant={"h5"} >{data.name}</Typography>
            </Box>
            <Box sx={{border:1,p:1,mb:1}}>
                <Typography  sx={{mb:1}} variant={"h5"}>{data.price}$</Typography>
                <Button fullWidth variant="contained">Add to Cart</Button>
            </Box>
            <Box sx={{border:1,p:1}}>
                <Typography>Seller: <strong>Amazon</strong> </Typography>
            </Box>
        </Box>
    );
};

export default TabSideBar;
