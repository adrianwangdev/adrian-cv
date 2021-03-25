import React, { useContext } from 'react'
import { useSpring } from 'react-spring'
import { CatStateContext } from '@utilities/context'
import { usePageLocation, useMenu } from '@utilities/useHooks'

/* Components */
import Info from '@components/Home/Info/Info'

/* Styles */
import { Section, Avatar, LinkButton } from '@components/Home/Home.styled'
import { BackgroundBlock, BackgroundImage } from '@components/Home/HomeBackground.styled'
import { MenuButton } from '@components/StyledModule/MenuButton.styled' 

/* Images */
import avatar from '@images/avatar.png'
import homeBackground from '@images/homeBackground.png'
import { ReactComponent as MenuIcon } from '@images/nav/menu.svg'

/* Background animation (calculate position) */
const calculate = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const movePosition = (x, y) => `translate3d(${x / 16}px,${y / 20}px ,0)`

const Home = () => {

  /* Background animation */
  const [backgroundAnimated, setAnimated] = useSpring(() => ({ 
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }))

  usePageLocation()
  useMenu()

  const { isMenuOpen, setIsMenuOpen } = useContext(CatStateContext)
  
  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Section>

      <MenuButton onClick={openMenu} isMenuOpen={isMenuOpen && true}>
        <MenuIcon />
      </MenuButton>

      <BackgroundBlock onMouseMove={({clientX: x, clientY: y}) => setAnimated({xy: calculate(x, y)})}>
        <BackgroundImage
          src={homeBackground}
          style={{transform: backgroundAnimated.xy.interpolate(movePosition)}}
          alt="background"
        />
      </BackgroundBlock>

      <Avatar src={avatar} alt="avatar" />
      <Info />
      <LinkButton to='/contact'>聯絡我</LinkButton>
    </Section>
  )
}

export default Home
