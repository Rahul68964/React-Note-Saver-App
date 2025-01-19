import React from 'react'
import { NavLink } from 'react-router'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink className="links" to="/">Home</NavLink>
        <NavLink className="links" to="/pastes">Pastes</NavLink>
    </div>
  )
}

export default Navbar