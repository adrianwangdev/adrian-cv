import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../../styles/Sidebar/navbar'

const Navbar = () => {

  return (
    <Nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/experience'>Experience</Link>
        </li>
        <li>
          <Link to='/project'>Project</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </Nav>
  )
}

export default Navbar
