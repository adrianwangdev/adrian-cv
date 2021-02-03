import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import avatar from '@images/avatar.png'
import Info from '@components/containers/Home/info'
import SocialMedia from '@components/containers/socialMedia'
import SocialMediaStyle from '@components/styles/Module/socialMedia'
import { Section, Avatar } from '@components/styles/Home/home'
import Button from '@components/styles/Module/button'

const Home = ({ checkLocation }) => {

  const location = useLocation()
  useEffect(() => {
    checkLocation(location.pathname)
  }, [])

  return (
    <Section>
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
