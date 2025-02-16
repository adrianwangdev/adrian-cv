import React, { useContext } from 'react'
import { CatStateContext } from '@utilities/context'
import { usePageLocation, useMenu } from '@utilities/useHooks'

/* Components */
import SectionTitle from '@components/SectionTitle/SectionTitle'
import Card from '../components/Experience/Card/Card'

/* Styles */
import { SectionWrapper } from '@components/StyledModule/SectionWrapper.styled'
import { Row, Column } from '@components/StyledModule/Grid.styled'
import {
  PageWrapper,
  Category,
  Cards,
  EducationColumn,
} from '@components/Experience/Experience.styled'
import { MenuButton } from '@components/StyledModule/MenuButton.styled'
import { SwitchThemeButton } from '@components/StyledModule/SwitchThemeButton.styled'

/* Images */
import { ReactComponent as EducationIcon } from '@images/experience/education.svg'
import { ReactComponent as WorkIcon } from '@images/experience/work.svg'
import { ReactComponent as MenuIcon } from '@images/nav/menu.svg'

const Experience = () => {
  usePageLocation()
  useMenu()

  const { isMenuOpen, setIsMenuOpen, lightTheme, setLightTheme } =
    useContext(CatStateContext)

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const setTheme = () => {
    setLightTheme(!lightTheme)
  }

  return (
    <SectionWrapper Special>
      <MenuButton onClick={openMenu} isMenuOpen={isMenuOpen && true}>
        <MenuIcon />
      </MenuButton>

      <SectionTitle>
        Experience
        <span>個人閱歷</span>
      </SectionTitle>
      <PageWrapper>
        <Row>
          <Column>
            <Category>
              <WorkIcon />
              <h3>工作經歷</h3>
              <p>6 年</p>
            </Category>

            <Cards>
              <Card category='work' />
            </Cards>
          </Column>

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
        </Row>
      </PageWrapper>

      <SwitchThemeButton>
        <label>
          <input type='checkbox' value='ON' onClick={setTheme} />
          <span>Theme</span>
        </label>
      </SwitchThemeButton>
    </SectionWrapper>
  )
}

export default Experience
