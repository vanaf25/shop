import React from 'react';
import Box from "@mui/material/Box";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination} from "swiper";
import Typography from "@mui/material/Typography";
import ProductProperties from "../ProductProperties/ProductProperties";
import {ExtendProduct} from "../../../../types/goodsTypes";
interface MainProps {
    data:ExtendProduct
}
const Main:React.FC<MainProps> = ({data}) => {
    return (
        <Box>
            {data?.photos &&   <Swiper
                style={{
                    width:"500px",position:"relative",
                }}
                modules={[Navigation, Pagination, A11y]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {data.photos.map(photo=><SwiperSlide><img style={{width:"90%"}}  src={photo.photo} alt="offer"/></SwiperSlide>
                )}
            </Swiper> }

            <Typography variant={"h5"} >Properties</Typography>
            <ProductProperties properties={data.properties} simplified/>
        </Box>
    );
};

export default Main;
