import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "./CarouselCard";
import styles from "./Carousel.module.css"


export default function Carousel({delhi}){

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
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
      <div style={{width: "90%", margin: "auto", border:"1px solid red", backgroundColor:"lightPink", padding: "30px"}}>
        <h2> Responsive </h2>
        <Slider {...settings}>
          {
            delhi.map((el)=>{
                return(
                    <div key={el.hotel_id+el.hotel_name}>
                        <CarouselCard photo1={el.photo1} name ={el.hotel_name} price={"₹"+el.rates_from+"00"} rating={el.star_rating} reviews={el.number_of_reviews}/>
                    </div>
                )
            })
          }
        </Slider>
      </div>
    );
}