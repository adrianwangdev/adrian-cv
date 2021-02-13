import React, { useContext } from 'react'
import { CatStateContext } from '@utilities/context'
import { skills } from '@utilities/skillTag'

/* Styles */
import {
  AboutMeBlock,
  AvatarMask,
  Description,
  JobTitle,
  Detail,
  Birth,
  SkillTag
} from './AboutMe.styled'

/* Images */
import avatar from '@images/avatar.png'

const AboutMe = () => {

  const { sidebarDetail } = useContext(CatStateContext)

  const skillsOnSidebar = skills.filter(skill => skill.onSidebar)

  const skillTagsElement = (item, index) => <p key={index}>{item}</p>

  const renderSkillTags = () => (
    skillsOnSidebar.map((item, index) => skillTagsElement(item.name, index))
  )

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
            <p>新北市</p>
          </Birth>
          <a href="mailto:adrianwangdev@gmail.com">adrianwangdev@gmail.com</a>
        </Detail>
      </Description>
      <SkillTag>
        {renderSkillTags(skillsOnSidebar)}
      </SkillTag>
    </AboutMeBlock> 
  )
}

export default AboutMe
