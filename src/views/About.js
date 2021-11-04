import { useContext } from 'react'
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

  const {
    isMenuOpen,
    setIsMenuOpen,
    lightTheme,
    setLightTheme,
    details: { cnName, enName }
  } = useContext(CatStateContext)

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

  usePageLocation()
  useMenu()

  return (
    <SectionWrapper>

      <MenuButton onClick={openMenu}  isMenuOpen={isMenuOpen && true}>
        <MenuIcon />
      </MenuButton>

      <SectionTitle>
        About
        <span>個人資料</span>
      </SectionTitle>

      <h3>{cnName} {enName}</h3>

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
          <p>擅長使用的技術為 React ( with Hooks ) 搭配 styled-components 建構專案。曾參與 10 多人的協作專案開發，也有從 0 完整建置專案的經驗，詳細的專案資歷和開發經歷可點選側邊欄 Experience 閱覽。</p>
          <br />
          <p>在轉職前端工程師之前我從事設計 3 年，因此對於介面和使用體驗頗為重視。當時為求更有效的與前端同仁溝通，開始了我對前端領域的學習之路，從而發現自己對開發充滿熱忱故而決心轉職。</p>
          <p>至今仍持續學習更深入的前端技術，短期目標是學習 TypeScript 和自動化測試。</p>
          <br />
          <p>本人個性開朗、求知慾旺盛，對細節有偏執的要求，在資源有限的情況下也盡力將成果做到最好。</p>
          <p>平時喜愛關注新趨勢和學習新技術，工作之餘也持續進修。除了技術部分，硬體部分另也熟悉 MacOS 系統，並了解基本 Linux 指令操作。</p>
          <br />
          <p>關於職場生態，我理解團隊的重要性也相當重視協作夥伴，在意程式碼的品質，更看重產品的使用體驗。若貴公司期望招收的同仁是可以獨撐天下，所有能力樣樣具備但只要都有 60 分就好，我可能不會是貴公司適合的人選。</p>
          <br />
          <p>我認為一人即便凡事具備但總歸能力有限，團隊在此便非常重要，若是有我擅長的領域我願意分享和提出建議，反之若自身有不足之處我也不會吝嗇付出努力加以精進。我所追求的是能夠與之一同進步、突破，為產品帶來更好的體驗與發展。</p>
          <br />
          <p>若我的能力條件與人格特質正符合貴公司挑選職員的理念，隨時歡迎您的聯繫。</p>
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
