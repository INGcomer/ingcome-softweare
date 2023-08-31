import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Productos.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

// IMG
import CAEII from './imgs/CAEII.png'
import congresoAmpros from "./imgs/congreso salud mental ampros.png"
import SISA from './imgs/SISA.png'
import leap from './imgs/leap.png'
// import cerebro from './imgs/newCerebroCurioso.png'


export default function Productos() {
    return (
        <div id="ConfianEnNosotros">
            <h3>Parte de nuestro porfolio</h3>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
            >
                <SwiperSlide>
                    <img src={CAEII} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={congresoAmpros} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SISA} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={leap} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}