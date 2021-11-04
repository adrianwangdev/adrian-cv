import { useContext } from 'react'
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

  const { sidebarDetail, isMenuOpen } = useContext(CatStateContext)
  
  return (
    <Menu isMenuOpen={isMenuOpen && true}>
      <MenuTitle hide={!!sidebarDetail}>
        <p>Adrian<span>’s CV</span></p>
      </MenuTitle>

      <AboutMe />
      
      <Nav moveDown={!!sidebarDetail} >
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
