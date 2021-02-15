import React, { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { CatStateContext } from '@utilities/context'
import { skills } from '@utilities/skillTag'

/* Components */
import SectionTitle from '@components/SectionTitle/SectionTitle'

/* Styles */
import { AboutSectionWrapper, AboutSkillTag } from '@components/About/About.styled'
import { Row, Column } from '@components/StyledModule/Grid.styled'

const About = () => {

  const location = useLocation()
  const { setSidebarDetail } = useContext(CatStateContext)

  useEffect(() => {
    location.pathname === '/'
      ? setSidebarDetail(false)
      : setSidebarDetail(true)
  }, [])

  const skillTagsElement = (item, index, className = '') => {
    return <p key={index} className={className}>{item.name}</p>
  }

  const renderSkillTags = () => (
    skills.map((item, index) => {
      if (item.familiar) {
        return skillTagsElement(item, index, 'familiar')
      } else {
        return skillTagsElement(item, index)
      }
    })
  )

  return (
    <AboutSectionWrapper>
      <SectionTitle>
        About
        <span>個人資料</span>
      </SectionTitle>

      <h3>王柔燁 Adrian</h3>

      <Row className="row">

        <Column>
          <div className="infoItem">
            <p className="title">年齡</p>
            <p className="content">26 歲</p>
          </div>
          <div className="infoItem">
            <p className="title">婚姻狀態</p>
            <p className="content">未婚</p>
          </div>
          <div className="infoItem">
            <p className="title">駕駛執照</p>
            <p className="content">普通重型機車駕照、普通小型車駕照</p>
          </div>
          <div className="infoItem">
            <p className="title">聯絡電話</p>
            <p className="content">0910 319 855</p>
          </div>
          <div className="infoItem">
            <p className="title">Email</p>
            <p className="content">adrianwangdev@gmail.com</p>
          </div>
        </Column>

        <Column>
          <AboutSkillTag>
            {renderSkillTags()}
          </AboutSkillTag>
        </Column>
      </Row>


      

    </AboutSectionWrapper>
  )
}

export default About
