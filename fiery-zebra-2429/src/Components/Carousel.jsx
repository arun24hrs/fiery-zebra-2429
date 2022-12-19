import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "./CarouselCard";
import Styles from "./Carousel.module.css"


export default function Carousel({delhi}){

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
    };
    return (
      <div className={Styles.Container}>
        <h2 className={Styles.carouselHeading}> You might like these </h2>
        <p className={Styles.carouselSubHeading}>Places to stay in {delhi[0].city}</p>
        <Slider {...settings}>
          {
            delhi.map((el)=>{
                return(
                    <div key={el.hotel_id+Date.now()}>
                        <CarouselCard photo1={el.photo1} name ={el.hotel_name} price={"₹"+el.rates_from+"00"} rating={el.star_rating} reviews={el.number_of_reviews}/>
                    </div>
                )
            })
          }
        </Slider>
      </div>
    );
}