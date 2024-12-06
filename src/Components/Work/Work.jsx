import Section from "../Section/Section";
import "./Work.css"
import imgOne from "../../assets/imgs/img-1-C4nS0eD8.jpg";
import imgTwo from "../../assets/imgs/img-2-D-4H1m4L.jpg";
import imgThree from "../../assets/imgs/img-3-pR2ZEVY9.jpg";
import imgFour from "../../assets/imgs/img-4-tHccITd-.jpg";
import imgFive from "../../assets/imgs/img-5-lAucr__a.jpg";
import imgSix from "../../assets/imgs/img-6-DFW03AZ3.jpg";

import Project from "./Project";
import { useState } from "react";



export default function Work() {
  const [content, setContent] = useState(false);

  function handleSelect(){
         setContent(!content);
       
  }
  return (
    <Section id="work" title="MY WORK" heading="RECENT WORK">
    <ul className="mb-3 nav nav-tabs" >
    <li className="nav-item" ><button type="button"  className="nav-link" >Graphic Design</button></li>
    <li className="nav-item" ><button type="button" className="nav-link">Apps</button></li>
    <li className="nav-item" ><button type="button" className="nav-link">Software </button></li></ul>
    <div className="row">
    <Project img={imgOne}/>
    <Project img={imgTwo}/>
    <Project img={imgThree}/>
    <Project img={imgFour}/>
    {content? ( <><Project img={imgFive}/>  <Project img={imgSix}/></>): ""}
    </div>
    <button  type="button" className="showMoreButton btn btn-primary" onClick={handleSelect}>{content? "Show less": "Show more"}</button>
    
    </Section>
  )
}
