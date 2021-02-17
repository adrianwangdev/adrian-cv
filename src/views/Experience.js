import React, { useContext } from 'react'
import { usePageLocation, useMenu } from '../utilities/useHooks'
import { CatStateContext } from '@utilities/context'

/* Components */
import SectionTitle from '@components/SectionTitle/SectionTitle'
import Card from '../components/Experience/Card/Card'

/* Styles */
import { SectionWrapper } from '@components/StyledModule/SectionWrapper.styled'
import { Row, Column } from '@components/StyledModule/Grid.styled'
import { Category, Cards, EducationColumn } from '@components/Experience/Experience.styled'
import { MenuButton } from '@components/StyledModule/MenuButton.styled' 

/* Images */
import { ReactComponent as EducationIcon } from '@images/experience/education.svg'
import { ReactComponent as WorkIcon } from '@images/experience/work.svg'
import { ReactComponent as MenuIcon } from '@images/nav/menu.svg'

const Experience = () => {

  usePageLocation()
  useMenu()

  const { isMenuOpen, setIsMenuOpen } = useContext(CatStateContext)

  return (
    <SectionWrapper Special>

      <MenuButton
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen && true}
      >
        <MenuIcon />
      </MenuButton>
      
      <SectionTitle>
        Experience
        <span>個人閱歷</span>
      </SectionTitle>
      <Row>

        <EducationColumn>
          <Category>
            <EducationIcon />
            <h3>教育程度</h3>
            <p>大學畢業</p>
          </Category>
          
          <Cards>
            <Card category='education' />
          </Cards>
        </EducationColumn>

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
