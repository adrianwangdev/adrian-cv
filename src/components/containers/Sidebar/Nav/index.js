import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from '@components/styles/Sidebar/navbar'

/* Svg Icons */
import { ReactComponent as HomeIcon } from '@images/nav/home.svg'
import { ReactComponent as AboutIcon } from '@images/nav/about.svg'
import { ReactComponent as WorkIcon } from '@images/nav/work.svg'
import { ReactComponent as ProjectIcon } from '@images/nav/project.svg'
import { ReactComponent as ContactIcon } from '@images/nav/contact.svg'

const Navbar = () => {

  return (
    <Nav>
      <ul>
        <li>
          <NavLink to='/' exact>
            <HomeIcon />Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about'>
            <AboutIcon />About
          </NavLink>
        </li>
        <li>
          <NavLink to='/experience'>
            <WorkIcon />Experience
          </NavLink>
        </li>
        <li>
          <NavLink to='/project'>
            <ProjectIcon />Project
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact'>
            <ContactIcon />Contact
          </NavLink>
        </li>
      </ul>
    </Nav>
  )
}

export default Navbar
