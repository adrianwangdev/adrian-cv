import React, { useContext } from 'react'
import { usePageLocation, useMenu } from '../utilities/useHooks'
import { CatStateContext } from '@utilities/context'

/* Components */
import SectionTitle from '@components/SectionTitle/SectionTitle'

/* Styles */
import { SectionWrapper } from '@components/StyledModule/SectionWrapper.styled'
import { MenuButton } from '@components/StyledModule/MenuButton.styled'

/* Images */
import { ReactComponent as MenuIcon } from '@images/nav/menu.svg'

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

    </SectionWrapper>
  )
}

export default Contact
