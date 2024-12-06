/* eslint-disable react/prop-types */

import "./Home.css";
export default function Info({greet, btn,icon}) {
  return (
    <div className=" info">
    <h1 className="greet text-lg-start text-center">{greet}</h1>
    <p className="desc text-lg-start text-center">100% html5 bootstrap templates Made 
     By <a className="work" href="https://colorlib.com/"> Colorlib.com</a></p>
    <button className="text-lg-start text-center">{btn} {icon} </button>
    </div>
  )
}
