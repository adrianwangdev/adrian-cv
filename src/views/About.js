import React, { useContext } from 'react'
import { CatStateContext } from '@utilities/context'
import { usePageLocation, useMenu } from '@utilities/useHooks'
import { skills } from '@utilities/skillTag'

/* Components */
import SectionTitle from '@components/SectionTitle/SectionTitle'
import InfoItems from '@components/About/InfoItems/InfoItems'

/* Styles */
import { SectionWrapper } from '@components/StyledModule/SectionWrapper.styled'
import { AboutSkillTag, AboutImageWrapper } from '@components/About/About.styled'
import { Row, Column } from '@components/StyledModule/Grid.styled'
import { MenuButton } from '@components/StyledModule/MenuButton.styled'
import { SwitchThemeButton } from '@components/StyledModule/SwitchThemeButton.styled'

/* Images */
import AboutPageImage from '@images/about/about.svg'
import { ReactComponent as MenuIcon } from '@images/nav/menu.svg'

const About = () => {

  usePageLocation()
  useMenu()

  const { isMenuOpen, setIsMenuOpen, lightTheme, setLightTheme } = useContext(CatStateContext)

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const setTheme = () => {
    setLightTheme(!lightTheme)
  }

  const skillTagsElement = (item, index, className = '') => (
    <p key={index} className={className}>{item.name}</p>
  )

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
    <SectionWrapper>

      <MenuButton onClick={openMenu}  isMenuOpen={isMenuOpen && true}>
        <MenuIcon />
      </MenuButton>

      <SectionTitle>
        About
        <span>個人資料</span>
      </SectionTitle>

      <h3>王柔燁 Adrian</h3>

      <Row>

        <Column>
          <InfoItems />
        </Column>

        <Column>
          <AboutSkillTag>
            {renderSkillTags()}
          </AboutSkillTag>
        </Column>

        <Column>
          <p>過去從事設計近 3 年，因過去工作接觸到網頁開發，從而發現自己對前端充滿熱忱。能夠獨立完成切版、串接 API、了解建構函式 Prototype、Virtual DOM 和 Real DOM 等概念。擅長使用的技術為 React ( with Hooks ) 搭配 Styled-Components / SCSS，至今仍持續學習更深入的前端技術，並接觸 Node 和 MongoDB 藉此多了解後端概念與之配合。</p>
          <br />
          <p>個性開朗、求知慾旺盛，對細節有偏執的要求。由於設計背景出身，本身對於使用者介面和體驗亦頗為重視，另也熟悉 MacOS 和 Linux Ubuntu 系統。</p>
          <br />
          <p>平時喜愛關注新趨勢和學習新技術，工作之餘也持續進修，期待能與未來的夥伴一同精進。</p>
        </Column>

        <Column>
          <AboutImageWrapper>
            <img src={AboutPageImage} alt="about" />
          </AboutImageWrapper>
        </Column>
      </Row>

      <SwitchThemeButton>
        <label>
          <input type="checkbox" value="ON" onClick={setTheme}/>
          <span>Theme</span>
        </label>
      </SwitchThemeButton>
    </SectionWrapper>
  )
}

export default About
