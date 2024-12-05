/* eslint-disable no-unused-vars */
import React from 'react';  
import "./Home.css";  
import bgOne from "../../assets/imgs/img_bg_1-PzvG2r05.jpg";  
import bgTwo from "../../assets/imgs/img_bg_1-PzvG2r05.jpg";  

export default function Home() {  
  return (  
    <>  
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">  
        <div className="carousel-inner">  
          <div className="carousel-item active">  
            <img src={bgOne} className="d-block w-100" alt="Background 1" />  
          </div>  
          <div className="carousel-item">  
            <img src={bgTwo} className="d-block w-100" alt="Background 2" />  
          </div>  
        </div>  

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">  
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>  
          <span className="visually-hidden">Previous</span>  
        </button>  
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">  
          <span className="carousel-control-next-icon" aria-hidden="true"></span>  
          <span className="visually-hidden">Next</span>  
        </button>  
      </div>  
    </>  
  );  
}
//  <Info greet= "Hi!Im Jackson" btn="DOWNLOAD CV" icon= <i className="fa-solid fa-download"></i> />
//       <Info greet= "I am a Designer" btn="VIEW PORTFOLIO" icon= <i className="fa-solid fa-briefcase"></i> />
// import Info from "./info";