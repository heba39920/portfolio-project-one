
/* eslint-disable no-unused-vars */
import React from "react";
import "./Home.css";
import { Carousel } from "react-bootstrap";
import Info from "./info";

export default function Home() {
  let sliderClass =  `slider1 d-flex flex-column justify-content-center text-center text-lg-start`

  return (
    <>
      <Carousel fade >
        <Carousel.Item className={sliderClass}>
          <Carousel.Caption >
      
         <Info greet= 'Hi! Im Jackson' btn="DOWNLOAD CV" icon= <i className="fa-solid fa-download"></i> />
     
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={`${sliderClass} slider2`}>
          <Carousel.Caption>
          <Info greet= "I am a Designer" btn="VIEW PORTFOLIO" icon= <i className="fa-solid fa-briefcase"></i> />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}



