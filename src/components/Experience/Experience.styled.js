import styled from 'styled-components'

const Category = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;

  h3 {
    margin: -.4rem 1.2rem 0 1.2rem;
    margin-bottom: 0;
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

export {
  Category,
  Cards
}
