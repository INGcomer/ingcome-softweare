import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Confian.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

// IMG
import ampros from './imgs/AMPROS.png'
import cameda from "./imgs/Cameda.png"
import aareii from './imgs/aareii.png'
import uncuyo from './imgs/UNCUYO.png'
import cerebro from './imgs/newCerebroCurioso.png'


export default function Confian() {
    return (
        <div id="ConfianEnNosotros">
            <h3>Confian en nosotros</h3>
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
                    <a href="https://cerebrocurioso.com.ar/">
                        <img src={cerebro} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://www.ampros.org.ar/">
                        <img src={ampros} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://www.cannabismedicinal.com.ar/domain/cannabismedicinal.com.ar/index.php">
                        <img src={cameda} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://aareii.org.ar/">
                        <img src={aareii} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://www.uncuyo.edu.ar/">
                        <img src={uncuyo} alt="" />
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}