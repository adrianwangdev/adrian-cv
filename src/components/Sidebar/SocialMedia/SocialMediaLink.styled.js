import styled from 'styled-components'

const SocialMediaStyle = styled.div`
  margin-top: -4rem;
  margin-left: -.6rem;
  margin-bottom: -2rem;

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
`

export default SocialMediaStyle
