import React, {useState} from 'react';
import {Alert, Box, Button, Link, Stack, Typography} from "@mui/material";
import Collapse from '@mui/material/Collapse';
const MiniCart = () => {
    const [open,isOpen]=useState(true)
    const cart={
        quantity:7,
        totalPrice:4535,
        goods:[{
            id:34,
            title:"Title",
            image:"https://content2.rozetka.com.ua/goods/images/medium/283529272.jpg"
        },
            {
                id:35,
                title:"Title",
                image:"https://content2.rozetka.com.ua/goods/images/medium/283529272.jpg"
            },
            {
                id:36,
                title:"Title",
                image:"https://content2.rozetka.com.ua/goods/images/medium/283529272.jpg"
            },
            {
                id:37,
                title:"Title",
                image:"https://content2.rozetka.com.ua/goods/images/medium/283529272.jpg"
            },
            {
                id:38,
                title:"Title",
                image:"https://content2.rozetka.com.ua/goods/images/medium/283529272.jpg"},
            {
                id:39,
                title:"Title",
                image:"https://content2.rozetka.com.ua/goods/images/medium/283529272.jpg"},
        ]
    }
    return (
        <Collapse in={open}>
            <Alert onClose={() => isOpen(false)} sx={{margin:"0 auto 10px", maxWidth:"900px",display:"flex",alignItems:"center"}} severity="info">
                <Stack direction={"row"} alignItems={"center"} spacing={3}>
                    <Box>
                        <h3>In cart are {cart.quantity} goods</h3>
                        <Typography>For price {cart.totalPrice}</Typography>
                    </Box>
                    <Stack direction={"row"} spacing={1}>
                        {cart.goods.slice(0,5).map(good=>{
                            return <img alt={good.title} key={good.id} src={good.image}/>
                        })}
                    </Stack>
                    <Stack>
                        <Link
                            sx={{mb:1}}
                            component="button"
                            variant="body2"
                        >
                            Go to the cart
                        </Link>
                        <Button variant="contained">Check out</Button>
                    </Stack>
                </Stack>
            </Alert>
        </Collapse>
    );
};

export default MiniCart;
