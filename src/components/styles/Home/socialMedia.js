import styled from 'styled-components'

const SocialMediaBlock = styled.div`
  display: flex;
  margin-top: 3.2rem;

  a {
    display: block;
    margin-right: 2.4rem;
    padding: .4rem;
    transition: all .3s;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      transform: translateY(-.8rem);

      svg path {
        fill: ${props => props.theme.colors.primary.primaryRegular};
      }
    }
  }
`

export {
  SocialMediaBlock
}
