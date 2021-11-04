import { useContext } from 'react'
import { CatStateContext } from '@utilities/context'
import { skills } from '@utilities/skillTag'
import { ageGenerator, dateFormatter } from '@utilities/generator'

/* Styles */
import {
  AboutMeBlock, AvatarMask, Description, JobTitle, Detail, Birth
} from './AboutMe.styled'
import { SkillTag } from '@components/StyledModule/SkillTag.styled'

/* Images */
import avatar from '@images/avatar.png'

const AboutMe = () => {

  const {
    sidebarDetail,
    details: { cnName, job, birth, city, email }
  } = useContext(CatStateContext)

  const skillsOnSidebar = skills.filter(skill => skill.onSidebar)

  const skillTagsElement = (item, index) => <p key={index}>{item}</p>

  const renderSkillTags = () => (
    skillsOnSidebar.map((item, index) => skillTagsElement(item.name, index))
  )

  return (
    <AboutMeBlock show={!!sidebarDetail}>
      <AvatarMask>
        <img src={avatar} alt="avatar" />
      </AvatarMask>
      <Description>
        <JobTitle>
          <h3>{cnName}</h3>
          <p>{job}</p>
        </JobTitle>
        <Detail>
          <Birth>
            <p>{dateFormatter(birth)}</p>
            <p>{`${ageGenerator(birth)} 歲`}</p>
            <p>{city}</p>
          </Birth>
          <a href={`mailto:${email}`}>{email}</a>
        </Detail>
      </Description>
      <SkillTag>
        {renderSkillTags(skillsOnSidebar)}
      </SkillTag>
    </AboutMeBlock> 
  )
}

export default AboutMe
