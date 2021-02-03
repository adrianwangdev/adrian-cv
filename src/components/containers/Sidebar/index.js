import React from 'react'
import AboutMe from './aboutMe'
import Navbar from './navbar'
import SocialMedia from '@components/containers/socialMedia'
import SocialMediaAccount from '@components/containers/Sidebar/socialMediaAccount'
import { Menu, MenuTitle } from '@components/styles/Sidebar/sidebar'
import Nav from '@components/styles/Sidebar/navbar'
import SocialMediaStyle from '@components/styles/Module/socialMedia'

const Sidebar = ({ sidebarDetail }) => {

  const renderTitleType = (sidebarDetail) => {
    if (sidebarDetail) {
      return <p>Adrian</p>
    }
    return (
      <>
        <p><span>Adrian</span>’s</p>
        <p>CV</p>
      </>
    )
  }
  
  const renderNavbarType = (sidebarDetail) => {
    if (sidebarDetail) {
      return (
        <Nav showDetail>
          <Navbar />
        </Nav>
      )
    }
    return (
      <Nav>
        <Navbar />
      </Nav >
    )
  }
  
  return (
    <Menu>
      <MenuTitle>
        {renderTitleType(sidebarDetail)}
      </MenuTitle>
      <AboutMe />
      {renderNavbarType(sidebarDetail)}
      <SocialMediaStyle inSidebar>
        <SocialMedia />
        <SocialMediaAccount />
      </SocialMediaStyle>
    </Menu>
  )
}
export default Sidebar
