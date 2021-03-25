import React, { useContext } from 'react'
import { usePageLocation, useMenu } from '../utilities/useHooks'
import { CatStateContext } from '@utilities/context'

/* Components */
import SectionTitle from '@components/SectionTitle/SectionTitle'

/* Styles */
import { SectionWrapper } from '@components/StyledModule/SectionWrapper.styled'
import { Row } from '@components/StyledModule/Grid.styled'
import { MenuButton } from '@components/StyledModule/MenuButton.styled'
import { ProjectColumn, Card, PreviewImage, ProjectInfo } from '@components/Project/Project.styled'

/* Images */
import { ReactComponent as MenuIcon } from '@images/nav/menu.svg'

const Project = () => {

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
        Project
        <span>專案項目</span>
      </SectionTitle>

      <Row>
        <ProjectColumn>
          <Card href="https://adrianwangdev.github.io/reads-platform/">
            <PreviewImage $name="readsPlatform" />
            <ProjectInfo $recently>
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
      
    </SectionWrapper>
  )
}

export default Project
