import styled from 'styled-components'

const Category = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;

  h3 {
    margin-right: 1.2rem;
    margin-bottom: 0;
    font-weight: 500;
    color: ${props => props.theme.colors.primary.primaryRegular};
  }

  p {
    font-size: 1.4rem;
  }
`

const Cards = styled.div`
  display: flex;
  flex-direction: column;
`

const Card = styled.div`
  margin-bottom: 2.4rem;
  padding: 1.6rem 2.4rem;
  border-radius: 1.6rem;
  background: white;
  box-shadow: 0 .4rem 4rem rgba(0, 0, 0, .08);

  &:last-child {
    margin-bottom: 0;
  }

  h3, h4 {
    font-weight: 700;
  }

  h4 {
    position: absolute;
    top: 1.6rem;
    right: 2.4rem;
  }

  p {
    font-size: 1.4rem;
    color: ${props => props.theme.colors.text.textLight};
  }
`

const CardTitle = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin: .8rem 1.2rem 1.2rem 0;
    color: ${props => props.theme.colors.primary.primaryRegular};
  }

  p {
    color: ${props => props.theme.colors.text.textDark};
  }
`

export {
  Category,
  Cards,
  Card,
  CardTitle
}
