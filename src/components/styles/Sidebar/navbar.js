import styled from 'styled-components'

const Nav = styled.nav`
  margin-top: 18rem;

  ul {
    list-style: none;
  }
  a {
    display: inline-block;
    padding: 1.2rem 0;
    width: 100%;
    text-decoration: none;
    color: ${props => props.theme.colors.text.textDark};

    &:hover,
    &.active {
      color: ${props => props.theme.colors.primary.primaryRegular};
    }
  }
`

export default Nav
