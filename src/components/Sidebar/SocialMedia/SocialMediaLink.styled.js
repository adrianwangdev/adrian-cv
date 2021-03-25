import styled from 'styled-components'

const SocialMediaStyle = styled.div`
  margin-top: -4rem;
  margin-left: -.6rem;
  margin-bottom: -2rem;
  
  @media (max-width: 576px) {
    display: none;
  }

  a {
    display: inline-block;
    margin-right: .8rem;
    padding: .4rem;
    transition: all .3s;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      transform: translateY(-.8rem);
    }
  }

  svg path {
    fill: ${props => props.theme.name === 'darkMode' && `
     ${props.theme.colors.text.textDark};
    `}
  }
`

export default SocialMediaStyle
