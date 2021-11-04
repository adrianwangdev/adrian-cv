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
