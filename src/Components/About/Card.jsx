/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Card({icon,iconName, title, className}) {
  return (
    <div className='col-md-3'>
      <div className={`services ${className}`}>
      <span className={iconName}>
        {icon}
      </span>
      <h3 className='serviceTitle'>{title}</h3>
      </div>
    </div>
  )
}
