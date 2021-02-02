import React from 'react'
import Navbar from './Nav/index'

import { Menu, MenuTitle } from '../../styles/Sidebar/sidebar'

const Sidebar = () => {
  
  return (
    <Menu>
      <MenuTitle>
        <p><span>Adrian</span>’s</p>
        <p>CV</p>
      </MenuTitle>

      <Navbar />

    </Menu>
  )
}
export default Sidebar
