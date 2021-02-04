import React, { useContext } from 'react'
import { CatStateContext } from '@utilities/context'
import AboutMe from './aboutMe'
import Navbar from './navbar'
import SocialMedia from '@components/containers/socialMedia'
import SocialMediaAccount from '@components/containers/Sidebar/socialMediaAccount'
import { Menu, MenuTitle } from '@components/styles/Sidebar/sidebar'
import Nav from '@components/styles/Sidebar/navbar'
import SocialMediaStyle from '@components/styles/Module/socialMedia'

const Sidebar = () => {

  const { sidebarDetail } = useContext(CatStateContext)
  
  return (
    <Menu>
      <MenuTitle onlyName={sidebarDetail ? true : false}>
        <p>Adrian<span>’s CV</span></p>
      </MenuTitle>

      <AboutMe />
      
      <Nav moveDown={sidebarDetail ? true : false} >
        <Navbar />
      </Nav>

      <SocialMediaStyle inSidebar>
        <SocialMedia />
        <SocialMediaAccount />
      </SocialMediaStyle>
    </Menu>
  )
}
export default Sidebar
