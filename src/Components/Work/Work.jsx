import Section from "../Section/Section";
import "./Work.css"
import Project from "./Project";
import { useState } from "react";
import { imgs } from "./img.js";
import Tabs from "./Tabs.jsx";


export default function Work() {
  const [content, setContent] = useState(false);
  const [path, setPath] = useState("GraphicDesign");
  function handleSelect() {
    setContent(!content);
  }
  const handleSelected = (selectedBtn) => {
    setPath(selectedBtn);
  }
  return (
    <Section id="work" title="MY WORK" heading="RECENT WORK">
      <ul className="mb-3 nav nav-tabs" >
        <Tabs className="nav-item" isSelected={path === "GraphicDesign"} onClick={() => handleSelected("GraphicDesign")} >Graphic Design</Tabs>
        <Tabs className="nav-item" isSelected={path === "Apps"} onClick={() => handleSelected("Apps")} > Apps</Tabs>
        <Tabs className="nav-item" isSelected={path === "Software"} onClick={() => handleSelected("Software")}>Software </Tabs></ul>
      <div className="row">
        {path === "GraphicDesign" && (
          <>
            <Project img={imgs[path].imgOne} />
            <Project img={imgs[path].imgTwo} />
            <Project img={imgs[path].imgThree} />
            <Project img={imgs[path].imgFour} />
          </>
        )
        }
        {
          path === "Apps" && (<>  
            <Project img={imgs[path].imgFour} />
            <Project img={imgs[path].imgFive} />
            <Project img={imgs[path].imgSix} />
   
          </>)
        }
        {
          path === "Software" && (<>
            <Project img={imgs[path].imgThree} />
            <Project img={imgs[path].imgOne} />
            <Project img={imgs[path].imgTwo} />



          </>)
        }
      {content ? (<><Project img={imgs[path].imgFive} />  <Project img={imgs[path].imgSix} /></>) : ""}
        
      </div>
      <button type="button" className="showMoreButton btn btn-primary mb-5" onClick={handleSelect}>{content ? "Show less" : "Show more"}</button>
          
    </Section>
  )
}
