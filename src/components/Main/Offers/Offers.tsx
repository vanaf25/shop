import React from 'react';
import {Alert, Box} from "@mui/material";
import {A11y,Navigation,Pagination,Scrollbar} from 'swiper';
import {SwiperSlide,Swiper} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Offers = () => {
   const offers={
       items:[
           "https://content2.rozetka.com.ua/banner_main/image/original/296774597.jpg",
           "https://content.rozetka.com.ua/banner_main/image/original/297200866.jpg",
           "https://content.rozetka.com.ua/banner_main/image/original/272494412.jpg",
           'https://content1.rozetka.com.ua/banner_main/image/original/293867093.jpg',
           "https://content.rozetka.com.ua/banner_main/image/original/296777956.jpg"
       ],
       total:87
   }
    return (
        <Swiper
            style={{width:900,marginBottom:10}}
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
        >
            {offers.items.map(offer=><SwiperSlide key={offer}><img width={"900px"} src={offer} alt="offer"/></SwiperSlide>
            )}
            <Alert severity={"info"}>
                All offers: {offers.total}
            </Alert>
        </Swiper>
    );
};

export default Offers;
