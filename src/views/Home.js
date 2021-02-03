import React from 'react'
import avatar from '@images/avatar.png'
import Info from '@components/containers/Home/info'
import SocialMedia from '@components/containers/Home/socialMedia'
import { Section, Avatar } from '@components/styles/Home/home'
import Button from '@components/styles/Button/button'

const Home = () => {

  return (
    <Section>
      <Avatar src={avatar} alt="avatar" />
      <Info />
      <Button primary>聯絡我</Button>
      <SocialMedia />
    </Section>
  )
}

export default Home
