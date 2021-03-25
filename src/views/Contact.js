import React, { useContext } from 'react'
import { usePageLocation, useMenu } from '../utilities/useHooks'
import { CatStateContext } from '@utilities/context'

/* Components */
import SectionTitle from '@components/SectionTitle/SectionTitle'

/* Styles */
import { SectionWrapper } from '@components/StyledModule/SectionWrapper.styled'
import { Row, Column } from '@components/StyledModule/Grid.styled'
import { MenuButton } from '@components/StyledModule/MenuButton.styled'
import { Card, TextContent } from '@components/Contact/Contact.styled'

/* Images */
import { ReactComponent as MenuIcon } from '@images/nav/menu.svg'
import { ReactComponent as MailIcon } from '@images/contact/mail.svg'
import { ReactComponent as PhoneIcon } from '@images/contact/phone.svg'

const Contact = () => {

  usePageLocation()
  useMenu()

  const { isMenuOpen, setIsMenuOpen } = useContext(CatStateContext)

  return (
    <SectionWrapper>

      <MenuButton
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen && true}
      >
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

    </SectionWrapper>
  )
}

export default Contact
