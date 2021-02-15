import React, { useContext } from 'react'
import { CatStateContext } from '@utilities/context'

/* Components */
import AboutMe from './AboutMe/AboutMe'
import Navbar from './Navbar/Navbar'
import SocialMediaLink from './SocialMedia/SocialMediaLink'
import SocialMediaAccount from './SocialMedia/SocialMediaAccount'

/* Styles */
import { Menu, MenuTitle } from './Sidebar.styled'
import Nav from './Navbar/Navbar.styled'
import SocialMediaStyle from './SocialMedia/SocialMediaLink.styled'

const Sidebar = () => {

  const { sidebarDetail } = useContext(CatStateContext)
  
  return (
    <Menu>
      <MenuTitle hide={sidebarDetail ? true : false}>
        <p>Adrian<span>’s CV</span></p>
      </MenuTitle>

      <AboutMe />
      
      <Nav moveDown={sidebarDetail ? true : false} >
        <Navbar />
      </Nav>

      <SocialMediaStyle>
        <SocialMediaLink />
        <SocialMediaAccount />
      </SocialMediaStyle>
    </Menu>
  )
}
export default Sidebar
