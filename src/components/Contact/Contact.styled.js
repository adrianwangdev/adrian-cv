import styled from 'styled-components'

const Card = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: .8rem;
  height: 20rem;
  border-radius: 1.6rem;
  text-decoration: none;
  background: ${props => props.theme.colors.primary.primaryLightest};
  transition: all .3s;
`

const TextContent = styled.div`
  padding: 8rem 0;
  text-align: center;

  h3 {
    margin-bottom: 1.6rem;
    font-family: 'Montserrat', 'Noto Sans TC', 'Microsoft JhengHei', '微軟正黑體', sans-serif;
    font-size: 3.6rem;
  }
  
  p {
    font-size: 2rem;
    color: ${props => props.theme.colors.text.textRegular};
  }
`

export {
  Card,
  TextContent
}