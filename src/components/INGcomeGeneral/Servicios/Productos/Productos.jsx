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
import simpledoc from './imgs/logo claro.svg'
// import cerebro from './imgs/newCerebroCurioso.png'


export default function Productos() {
    return (
        <div id="ConfianEnNosotros">
            <h3>Parte de nuestro porfolio</h3>
            <Swiper
                slidesPerView={5}
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
                    <a href="https://caeii-2022.vercel.app/" className='producto'>
                        <img src={CAEII} alt="" />
                    </a>
                </SwiperSlide>

                <SwiperSlide>
                    <a href="https://congresosaludmental.ampros.org.ar/" className='producto'>
                        <img src={congresoAmpros} alt="" />
                    </a>
                    
                </SwiperSlide>
                {/* <SwiperSlide>
                    <a href="https://www.withsisa.com/" className='producto'> 
                        <img src={SISA} alt="" />
                    </a>
                    
                </SwiperSlide> */}
                <SwiperSlide>
                    <a href="" className='producto'>
                        <img src={leap} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://www.simpledoc.site/" className='producto'>
                        <img src={simpledoc} alt="" />
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}