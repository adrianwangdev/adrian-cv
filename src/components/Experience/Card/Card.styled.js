import styled from 'styled-components'

const CardWrapper = styled.div`
  margin-bottom: 2.4rem;
  padding: 1.6rem 2.4rem;
  border-radius: 1.6rem;
  background: ${props => props.theme.colors.basic.white};
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
    margin-bottom: .4rem;
    font-size: 1.4rem;
    color: ${props => props.theme.colors.text.textLight};
  }
`

const CardTitle = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1.2rem;

  h3 {
    margin-bottom: 0;
    margin-right: 1.2rem;
    color: ${props => props.theme.colors.primary.primaryRegular};
  }

  p {
    top: .2rem;
    color: ${props => props.theme.colors.text.textDark};
  }
`

export {
  CardWrapper,
  CardTitle
}
