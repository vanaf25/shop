import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Rating, Stack} from "@mui/material";
import {Link} from "react-router-dom";
import styles from './Item.module.css'
import {Product} from "../../../types/goodsTypes";
type ItemProps={
item:Product
}
const Item:React.FC<ItemProps>=({item})=> {
    return (
        <Link className={styles.item} to={`/products/${item.id}`}>
            <Card  sx={{ width: 250,mb:1,mr:1 }}>
                <CardMedia
                    component="img"
                    height="140"
                    sx={{width:170,margin:"0 auto"}}
                    image={`${process.env.REACT_APP_SERVER_URL}/${process.env.REACT_APP_PATH_TO_DEVICE_IMAGES}/${item.mainPhoto}`}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name.slice(0,15)}
                    </Typography>
                    <Stack direction={"row"} spacing={1} >
                        <Rating readOnly  name="size-small" defaultValue={item.rating} size="small" />
                        <Typography variant={"body2"}>85 comments </Typography>
                    </Stack>
                    <Typography sx={{textAlign:"left"}}  variant={"h6"} >
                        ${item.price}$
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
}
export default Item
