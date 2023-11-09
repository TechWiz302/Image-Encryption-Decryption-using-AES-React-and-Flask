import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import "./Testimonial.css"
import { testimonial } from '../../data/constant';

function Testimonial() {

    return (

        <>
            <div className="section_padding testimonial-cont">

                <div className="testimonial-heading">
                    <h1>Our Client Say</h1>
                </div>

                <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{ clickable: true, }} navigation={true} modules={[Pagination, Navigation]} className="mySwiper" >
                    {testimonial.map((item, index) => (
                        <SwiperSlide key={index}>
                            <section className="testimonial-container">
                                <div className="testimonial">
                                    <div className="testimonial-content swiper-wrapper">
                                        <div className="slide">
                                            <img className='image' src={item.image} alt={`testimonial${index + 1}`} />
                                            <p>{item.review}</p>
                                            <i className='bx bxs-quote-alt-left quote-icon'></i>
                                            <div className="details">
                                                <span className="name">{item.name}</span>
                                                <span className="job">{item.job}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>

    )
}

export default Testimonial