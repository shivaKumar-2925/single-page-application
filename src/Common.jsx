import React from 'react'
import { NavLink } from 'react-router-dom'
import img from './images/myimg.svg'
const Common = (props) => {
  return (
    <div>
      <div className="common">
       <div className="first">
        <h2>Wellcome to my website</h2>
        
        <h3>{props.text}</h3>
      
        <NavLink to='/service' >Explore More</NavLink>
       </div>
       <div className="secound">
       <img src={props.images} alt='my img' />

       </div>
      </div>
    </div>
  )
}

export default Common
