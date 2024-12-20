/* eslint-disable react/prop-types */
import {NavLink } from "react-router-dom";
import "./SideBar.css";

export default function SideBar({toggleSideBar}) {
  return (
    <>
   <button className="toggleIcon d-none" onClick={toggleSideBar}><i className="fa-solid fa-bars"></i></button>
    <div className="overLay d-none" onClick={toggleSideBar}></div> 
    <section className="sidebar"> 
   
     <img className="profile-img" />
    <h1 > <a href="#" className="name">Jackson Ford</a></h1>
     <p className="jop-profile"><a href="#">UI/UX/Designer</a> in Philippines</p>
    <ul className="navigation">
      <li><NavLink className="nav-element" to="/home">Home</NavLink></li>
      <li><NavLink className="nav-element" to="/about">About</NavLink></li>
      <li><NavLink className="nav-element" to="/skills">Skills</NavLink></li>
      <li><NavLink className="nav-element" to="/experience">Experience</NavLink></li>
      <li><NavLink className="nav-element" to="/work">Work</NavLink></li>
    </ul>
    </section>
  </>
  )
  
}
