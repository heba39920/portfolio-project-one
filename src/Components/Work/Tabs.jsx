

/* eslint-disable react/prop-types */
export default function Tabs({children, isSelected ,...props}) {

    return (<>

      <li className='nav-item' {...props}><button className={`nav-link ${isSelected? 'active' : ""}`}>{children}</button></li>
  
   </>
    )
  }