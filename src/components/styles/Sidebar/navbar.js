import styled from 'styled-components'

const Nav = styled.nav`
  margin-top: 18rem;

  ul {
    list-style: none;
  }
  a {
    display: inline-flex;
    align-items: center;
    padding: 1.2rem 0;
    width: 100%;
    text-decoration: none;
    color: ${props => props.theme.colors.text.textDark};

    svg {
      margin-right: 2.4rem;
    }

    &:hover,
    &.active {
      color: ${props => props.theme.colors.primary.primaryRegular};

      svg path {
        stroke: ${props => props.theme.colors.primary.primaryRegular};
      }
    }
  }
`

export default Nav
