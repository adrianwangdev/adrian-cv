import React from 'react'
import Navbar from './Nav'

import { Menu, MenuTitle } from '@components/styles/Sidebar/sidebar'

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
