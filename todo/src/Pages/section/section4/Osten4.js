import "./Osten4.css"
import React from 'react'
import { Button } from 'reactstrap'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
// import Swiper core and required modules
import SwiperCore, {
    Navigation, Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);


const Osten4 = () => {
    return (
        <div className="contain5">
            <h1 className="write6">Кабины лифтов</h1>

            <Swiper spaceBetween={20} navigation={true} pagination={{
                "clickable": true
            }} className="mySwiper">

                <SwiperSlide><img className="rasm6" src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg"></img></SwiperSlide>
                <SwiperSlide><img className="rasm6" src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2_heV74LX.jpg"></img></SwiperSlide>
                <SwiperSlide><img className="rasm6" src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg"></img></SwiperSlide>
                <SwiperSlide><img className="rasm6" src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2_heV74LX.jpg"></img></SwiperSlide>
                <SwiperSlide><img className="rasm6" src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg"></img></SwiperSlide>
                <SwiperSlide><img className="rasm6" src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2_heV74LX.jpg"></img>7</SwiperSlide>
                <SwiperSlide><img className="rasm6" src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2.jpg"></img></SwiperSlide>
                <SwiperSlide><img className="rasm6" src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg"></img></SwiperSlide>
            </Swiper>
            <div className="battn">    <Button className="btn btn-primary">Подробнее</Button></div>
        </div>
    )
}
export default Osten4;