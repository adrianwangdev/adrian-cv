import React, { useContext } from 'react'
import { CatStateContext } from '@utilities/context'
import { AboutMeBlock, AvatarMask, Description, JobTitle, Detail, Birth, SkillTag } from '@components/styles/Sidebar/aboutMe'
import avatar from '@images/avatar.png'

const AboutMe = () => {

  const { sidebarDetail } = useContext(CatStateContext)

  return (
    <AboutMeBlock show={sidebarDetail ? true : false}>
      <AvatarMask>
        <img src={avatar} alt="avatar" />
      </AvatarMask>
      <Description>
        <JobTitle>
          <h3>王柔燁</h3>
          <p>前端工程師</p>
        </JobTitle>
        <Detail>
          <Birth>
            <p>1994/06/08</p>
            <p>26 歲</p>
          </Birth>
          <p>新北市</p>
          <a href="mailto:adrianwangdev@gmail.com">adrianwangdev@gmail.com</a>
        </Detail>
      </Description>
      <SkillTag>
        <p>HTML5</p>
        <p>SCSS</p>
        <p>JS</p>
        <p>React</p>
        <p>CSS-in-JS</p>
      </SkillTag>
    </AboutMeBlock> 
  )
}

export default AboutMe
