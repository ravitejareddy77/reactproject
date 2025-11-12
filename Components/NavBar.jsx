import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (<>
  <nav>
    <NavLink to="/" id="logo">JOURNAL</NavLink>
  <button  id="createbtn"><NavLink to="create-journal">CREATE JOURNAL</NavLink></button>
  </nav>
  </>
  )
}

export default NavBar