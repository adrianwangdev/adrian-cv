import styled from 'styled-components'

const SocialMediaAccountBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-left: .6rem;

  h3 {
    font-size: 1.4rem;
    margin-right: .8rem;
    letter-spacing: -.02rem;
  }

  p {
    font-family: 'Noto Sans TC', 'Microsoft JhengHei', '微軟正黑體', sans-serif;
    font-size: 1.2rem;
    letter-spacing: .1rem;
    color: ${props => props.theme.colors.text.textLight};
  }

  > #input {
    opacity: 0;
  }
`

export default SocialMediaAccountBlock
