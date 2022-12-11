import React from 'react';
import {PhotosType} from "../../../../types/goodsTypes";
import {Box} from "@mui/material";
interface ProductPhotosProps {
    photos:PhotosType[]
}
const ProductPhotos:React.FC<ProductPhotosProps> = ({photos}) => {
    return (
        <Box>
            {photos.map(photo=><img style={{maxWidth:"100%"}} src={photo.photo} alt={"photo"} />)}
        </Box>
    );
};

export default ProductPhotos;
