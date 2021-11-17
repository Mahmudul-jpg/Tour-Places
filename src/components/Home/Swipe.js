
// import React, { useRef, useState } from "react";
// Import Swiper React components
//import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import ImageData from '../ImageData'
// import '../../images'
// import '../../../public/images'
// import TourplaceData from '../TourplaceData'
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination"
// import "swiper/css/navigation"

import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module

import "./styles.scss";


// import Swiper core and required modules
import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);


function Swipe() {



  return (
    <>
      <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
        "delay": 2000,
        "disableOnInteraction": false
      }} pagination={{
        "clickable": true
      }} navigation={true} className="mySwiper">
        <SwiperSlide key={ImageData.Id}>
          <img src='../../images/banderban.jpg' alt='Bandarban' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='../../images/coxBazar.jpg' alt='CoxsBazar' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='../../images/sundarban.jpg' alt='Sundarban' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='../../images/syhlet.jpg' alt='Syhlet' />
        </SwiperSlide>

      </Swiper>
    </>
  )
}
export default Swipe