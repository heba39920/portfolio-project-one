/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

export default function Project({img}) {
  return (
    <div className="col-lg-6">
    <div className="project"><img src={img} alt="" />
    <div className="description pt-4"><div className="con"><span><h3><a href="work.html">Work 02</a></h3><span>Animation</span></span><p className="icon"><span><a href="#"><i className="fa-solid fa-share-nodes"></i></a></span><span><a href="#"><i className="fa-regular fa-eye"></i> 100</a></span><span><a href="#"><i className="fa-regular fa-heart"></i> 49</a></span></p></div></div>
    </div> 
     
     </div>
  )
}
