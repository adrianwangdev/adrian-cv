import styled from 'styled-components'

const SocialMediaAccountBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-left: .6rem;

  > #input {
    opacity: 0;
  }

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
    transition: all .2s;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.colors.primary.primaryRegular};
    }
  }

  div {
    display: none;
    position: absolute;
    top: -100%;
    left: 72%;
    width: 40%;
    padding: .2rem .4rem;
    border-radius: .4rem;
    font-family: 'Noto Sans TC', 'Microsoft JhengHei', '微軟正黑體', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: .04rem;
    line-height: 1.6;
    transform: scale(.8);
    color: ${props => props.theme.colors.text.textRegular};

    &::after {
      content: '/';
      display: block;
      padding-left: 1.6rem;
    }
  }
`

export default SocialMediaAccountBlock
