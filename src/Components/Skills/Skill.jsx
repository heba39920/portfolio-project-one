/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function Skill({title,className}) {
  return (
    <>
    <h3 className="mb-2 levelTitle">{title}</h3>
    <div className={`${className} level`}>
    <div  className="level-bar bg-warning"></div>
    </div>
    </>
  )
}
