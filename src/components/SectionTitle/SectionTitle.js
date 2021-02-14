import React from 'react'
import { SectionTitleStyled } from './SectionTitle.styled'

import dotsIcon from '@images/sectionTitle/dots.svg'

const SectionTitle = ({children}) => (
  <SectionTitleStyled>
    <img src={dotsIcon} alt=""/>
    <h2>{children}</h2>
  </SectionTitleStyled>
)

export default SectionTitle
