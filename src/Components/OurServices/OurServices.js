import React from 'react';
import './OurServices.css';

import ServicesData from '../../Data/OurServicesData';
import OneService from '../OneSevice/OneService';
// import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, {Navigation,A11y} from 'swiper';
SwiperCore.use([Navigation]);
const OurServices = () =>{
    // const fetchServices = ServicesData.map(item => {
    //     return (
    //         <div key={item.id} className="col-md-3 col-sm-6 mb-5 text-center">
    //             <OneService id={item.id} img={item.img} title={item.title} text={item.text} />
    //         </div>
    //     )
    // });
    const fetchServices2 = ServicesData.map(item => {
        return (
            <SwiperSlide  key={item.id}>
                <OneService id={item.id} img={item.img} title={item.title} text={item.text}  />
            </SwiperSlide>
        )
    })
    
    return(
        <div className="our-services">
            <div className="container">
                <div className="title">
                    <h2>خدماتنا</h2>
                </div>
                {/* <div className="row">
                    {fetchServices}
                </div> */}
                <div className="swiper">
                    <Swiper
                        modules={[Navigation, A11y]}
                        spaceBetween={50}
                        slidesPerView={4}
                        navigation
                        // pagination={{ clickable: true }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                        >

                        {fetchServices2}
                       
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
export default OurServices;