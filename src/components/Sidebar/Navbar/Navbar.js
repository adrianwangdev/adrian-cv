import React from 'react'
import { NavLink } from 'react-router-dom'
import { routeLink } from '@utilities/routeLink'

const Navbar = () => {

  const element = (item, index) => (
    <li key={index}>
      <NavLink to={item.link} exact={item.exact}>
        <item.icon />
        {item.text}
      </NavLink>
    </li>
  )

  const renderNavbar = () => (
    routeLink.map((item, index) => element(item, index))
  )

  return (
    <ul>
      { renderNavbar() }
    </ul>
  )
}

export default Navbar
