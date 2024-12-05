/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Section({children , heading , title, content}) {
  return (
    <div className="container  py-5 mt-lg-0 mt-3 d-lg-flex d-block flex-column  vh-100">
    <div className="info">
      <p className="title">{title}</p>
    <h2 className="heading">{heading}</h2>
    <p className="Content">{content}</p>
    {children}
    </div>
  
    </div>
  )
}
