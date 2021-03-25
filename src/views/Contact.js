import React, { useContext } from 'react'
import { CatStateContext } from '@utilities/context'
import { usePageLocation, useMenu } from '@utilities/useHooks'


/* Components */
import SectionTitle from '@components/SectionTitle/SectionTitle'

/* Styles */
import { SectionWrapper } from '@components/StyledModule/SectionWrapper.styled'
import { Row, Column } from '@components/StyledModule/Grid.styled'
import { MenuButton } from '@components/StyledModule/MenuButton.styled'
import { Card, TextContent } from '@components/Contact/Contact.styled'
import { SwitchThemeButton } from '@components/StyledModule/SwitchThemeButton.styled'

/* Images */
import { ReactComponent as MenuIcon } from '@images/nav/menu.svg'
import { ReactComponent as MailIcon } from '@images/contact/mail.svg'
import { ReactComponent as PhoneIcon } from '@images/contact/phone.svg'

const Contact = () => {

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
    <SectionWrapper>

      <MenuButton onClick={openMenu} isMenuOpen={isMenuOpen && true}>
        <MenuIcon />
      </MenuButton>

      <SectionTitle>
        Contact
        <span>聯絡方式</span>
      </SectionTitle>

      <Row>
        <Column>
          <Card href="mailto:adrianwangdev@gmail.com">
            <MailIcon />
          </Card>
        </Column>
        <Column>
          <Card href="tel:0910319855">
            <PhoneIcon />
          </Card>
        </Column>
        <Column $fullWidth>
          <TextContent>
            <h3>Thank you</h3>
            <p>非常感謝您所花費的時間</p>
          </TextContent>
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

export default Contact
