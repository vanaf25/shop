import React from 'react';
import {Property} from "../../../../types/goodsTypes";
import {List, ListItem} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
interface ProductPropertiesProps {
    properties:Property[],
    simplified?:boolean
}
const ProductProperties:React.FC<ProductPropertiesProps> = ({properties,simplified}) => {
    return (
        <Box sx={{flex:"1 1 auto",mr:1}}>
            <List sx={{bgcolor: 'background.paper',pb:0}}>
                { properties.filter((property,index)=>!simplified || index<6 ).map((property,index)=><ListItem sx={{justifyContent:"space-between",
                    backgroundColor:index%2===1 ? "#eeeeee":"#fff", display:"flex"}}  key={property.id}>
                    <Typography>
                        {property.title}:
                    </Typography>
                    <Typography>
                        {property.body}
                    </Typography>
                </ListItem>)}
            </List>
        </Box>
    );
};

export default ProductProperties;
