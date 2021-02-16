import React, { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { CatStateContext } from '@utilities/context'

/* Components */
import SectionTitle from '@components/SectionTitle/SectionTitle'
import Card from '../components/Experience/Card/Card'

/* Styles */
import { SectionWrapper } from '@components/StyledModule/SectionWrapper.styled'
import { Row, Column } from '@components/StyledModule/Grid.styled'
import { Category, Cards } from '@components/Experience/Experience.styled'

/* Svg Icons */
import { ReactComponent as EducationIcon } from '@images/experience/education.svg'
import { ReactComponent as WorkIcon } from '@images/experience/work.svg'

const Experience = () => {

  const location = useLocation()
  const { setSidebarDetail } = useContext(CatStateContext)

  useEffect(() => {
    location.pathname === '/'
      ? setSidebarDetail(false)
      : setSidebarDetail(true)
  }, [])

  return (
    <SectionWrapper Special>
      <SectionTitle>
        Experience
        <span>個人閱歷</span>
      </SectionTitle>
      <Row>

        <Column>
          <Category>
            <EducationIcon />
            <h3>教育程度</h3>
            <p>大學畢業</p>
          </Category>
          
          <Cards>
            <Card category='education' />
          </Cards>
        </Column>

        <Column>
          <Category>
            <WorkIcon />
            <h3>工作經歷</h3>
            <p>2 ~ 3 年</p>
          </Category>

          <Cards>
            <Card category='work' />
          </Cards>
        </Column>

      </Row>
    </SectionWrapper>
  )
}

export default Experience
