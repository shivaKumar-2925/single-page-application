import React from 'react'
import { NavLink } from 'react-router-dom'
const Menu = () => {
  return (
    <div>
      <div className="navlinks">
      <NavLink activeStyle={{textDecoration:'underLine'}} to='/'>Home</NavLink>
      <NavLink activeStyle={{textDecoration:'underLine'}}to='/about'>About</NavLink>
      <NavLink activeStyle={{textDecoration:'underLine'}} to='/service'>Service</NavLink>
      <NavLink activeStyle={{textDecoration:'underLine'}} to='/contact'>Contact</NavLink>
      </div>
    </div>
  )
}

export default Menu
