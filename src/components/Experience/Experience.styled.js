import styled from 'styled-components'
import { Column } from '../StyledModule/Grid.styled'

const PageWrapper = styled.div`
  svg path {
    fill: ${props => props.theme.name === 'darkMode' && `
     ${props.theme.colors.primary.primaryRegular};
    `}
  }
`

const Category = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;

  h3 {
    margin: -.4rem 1.2rem 0 1.2rem;
    font-weight: 500;
    color: ${props => props.theme.colors.primary.primaryRegular};
  }

  p {
    margin-top: -.4rem;
    font-size: 1.4rem;
  }
`

const Cards = styled.div`
  display: flex;
  flex-direction: column;
`

const EducationColumn = styled(Column)`
  @media (max-width: 1200px) {
    order: 2;
  }
`

export {
  PageWrapper,
  Category,
  Cards,
  EducationColumn
}
