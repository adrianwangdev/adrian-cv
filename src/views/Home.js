import React, { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { useSpring } from 'react-spring'
import { CatStateContext } from '@utilities/context'
import avatar from '@images/avatar.png'
import homeBackground from '@images/homeBackground.png'
import Info from '@components/containers/Home/info'
import SocialMedia from '@components/containers/socialMedia'
import SocialMediaStyle from '@components/styles/Module/socialMedia'
import { Section, Avatar } from '@components/styles/Home/home'
import { BackgroundBlock, BackgroundImage } from '@components/styles/Home/background'
import Button from '@components/styles/Module/button'

/* Background animation (calculate position) */
const calculate = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const movePosition = (x, y) => `translate3d(${x / 16}px,${y / 20}px ,0)`

const Home = () => {

  /* Background animation */
  const [backgroundAnimated, setAnimated] = useSpring(() => ({ 
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }))

  const location = useLocation()
  const { setSidebarDetail } = useContext(CatStateContext)
  
  useEffect(() => {
    location.pathname === '/'
      ? setSidebarDetail(false)
      : setSidebarDetail(true)
  }, [])

  return (
    <Section>

      <BackgroundBlock onMouseMove={({clientX: x, clientY: y}) => setAnimated({xy: calculate(x, y)})}>
        <BackgroundImage
          src={homeBackground}
          style={{transform: backgroundAnimated.xy.interpolate(movePosition)}}
          alt="background"
        />
      </BackgroundBlock>

      <Avatar src={avatar} alt="avatar" />
      <Info />
      <Button primary>聯絡我</Button>

      <SocialMediaStyle>
        <SocialMedia />
      </SocialMediaStyle>
      
    </Section>
  )
}

export default Home
