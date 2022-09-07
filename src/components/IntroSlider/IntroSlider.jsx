import React, { useRef,useState,useEffect } from "react";
import IntroSlideCard from "../Intro_Slide_Card/IntroSlideCard";
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide ,useSwiperSlide} from "swiper/react";
import "./IntroSlider.scss";
import "swiper/css";
import "swiper/css/pagination";
import arrow from  '../../assets/slide-arrow.svg'

import slideImg1  from '../../assets/slide1.png'
import slideImg2  from '../../assets/slide2.png'

export default function ProductSlider() {
    const swiperRef = useRef();

    const [backBtnTitle,setBackBtnTitle] =useState('')
    const [nextBtnTitle,setNextBtnTitle] =useState('')
    const swiperSlideChangeHandler = (swiper)=>{

        let index = swiper.slides[swiper.activeIndex].getAttribute('data-swiper-slide-index');
        console.log(swiper.slides[index].lastChild.title);
        setBackBtnTitle(swiper.slides[index].lastChild.title)
        setNextBtnTitle(swiper.slides[index].lastChild.title)
        //this works stupidly not like I want
    }

    const nextSlideHandler = () => {
        swiperRef.current.slideNext();
    };
    const prevSlideHandler = () => {
        swiperRef.current.slidePrev();
    };
    const slides = [
        {
            title: "What's new ✨",
            content:
                "Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet.",
            img: slideImg1,
        },
        {
            title: "Welcome to Discover 🌎",
            content:
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            img: slideImg2,
        },
    ];
    return (
        <section id="intro_slider_container">
            <div id="intro_slider">
                <div className="nav_button" onClick={prevSlideHandler} title={backBtnTitle}>
                <img src={arrow} />
                </div>
                <Swiper
                    modules= {[Navigation, Pagination,Autoplay, Scrollbar]}
                    pagination={true}
                    spaceBetween={24}
                    watchSlidesProgress
                    loop={true}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      onSlideChange={(swiper)=>swiperSlideChangeHandler(swiper)}

                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;


                    }}
                >
                    {slides.map((x, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <IntroSlideCard
                                    title={x.title}
                                    content={x.content}
                                    img={x.img}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <div className="nav_button" onClick={nextSlideHandler} title={nextBtnTitle}>
                <img src={arrow}/>

                </div>
            </div>
        </section>
    );
}
