import React, { useContext } from 'react'
import { CatStateContext } from '@utilities/context'
import { usePageLocation, useMenu } from '@utilities/useHooks'

/* Components */
import SectionTitle from '@components/SectionTitle/SectionTitle'

/* Styles */
import { SectionWrapper } from '@components/StyledModule/SectionWrapper.styled'
import { Row } from '@components/StyledModule/Grid.styled'
import { MenuButton } from '@components/StyledModule/MenuButton.styled'
import { ProjectColumn, Card, PreviewImage, ProjectInfo } from '@components/Project/Project.styled'
import { SwitchThemeButton } from '@components/StyledModule/SwitchThemeButton.styled'

/* Images */
import { ReactComponent as MenuIcon } from '@images/nav/menu.svg'

const Project = () => {

  usePageLocation()
  useMenu()

  const { isMenuOpen, setIsMenuOpen, lightTheme, setLightTheme } = useContext(CatStateContext)

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
        Project
        <span>專案項目</span>
      </SectionTitle>

      <Row>
        <ProjectColumn>
          <Card>
            <ProjectInfo $recently>
              <h3>聲明</h3>
              <p>更多實作之專案因保密政策未能提供公開閱覽，敬請見諒。</p>
              <br />
              <h4>1. 網路銀行系統 - React + Redux</h4>
              <p>資料傳遞加解密 / 封裝可重用組件 ( UI 與邏輯拆分 ) / 無限滾動獲取資料 ( 雙向滾動 ) / Material-UI</p>
              <br />
              <h4>2. 電商網站後台 - React + Redux</h4>
              <p>路由權限控制 / 資料分頁控制 / 封裝線上編輯器提供上稿 ( 預覽 HTML ) / Material-UI</p>
              <br />
              <h4>3. 管理系統後台 - React + Redux</h4>
              <p>複雜的表單控制與驗證 / 完全手刻 UI</p>
              <br />
              <h4>4. 電商網站前台 - Next.js ( SSR ) + Redux</h4>
              <p>動態路由 / Server-Side Rendering / 重新定向 404 Routes / Antd</p>
            </ProjectInfo>
          </Card>
        </ProjectColumn>
        <ProjectColumn>
          <Card href="https://adrianwangdev.github.io/reads-platform/">
            <PreviewImage $name="readsPlatform" />
            <ProjectInfo>
              <h3>Reads Platform</h3>
              <p>React / Redux / Firebase / Material-UI / RWD</p>
            </ProjectInfo>
          </Card>
        </ProjectColumn>
        <ProjectColumn>
          <Card href="https://adrianwangdev.github.io/WebPractice/index.html">
            <PreviewImage $name="greenfieldGrafik" />
            <ProjectInfo>
              <h3>Project Name</h3>
              <p>HTML / CSS / Bootstrap / jQuery / RWD</p>
            </ProjectInfo>
          </Card>
        </ProjectColumn>
        <ProjectColumn>
          <Card href="https://codepen.io/adrianwangdev/full/eYOMEaN">
            <PreviewImage $name="cuEAZ" />
            <ProjectInfo>
              <h3>cuEAZ</h3>
              <p>HTML / CSS / RWD</p>
            </ProjectInfo>
          </Card>
        </ProjectColumn>
        <ProjectColumn>
          <Card href="https://codepen.io/adrianwangdev/full/vYBRJrJ">
            <PreviewImage $name="whatever" />
            <ProjectInfo>
              <h3>Whateve | Wix.com</h3>
              <p>HTML / CSS</p>
            </ProjectInfo>
          </Card>
        </ProjectColumn>
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

export default Project
