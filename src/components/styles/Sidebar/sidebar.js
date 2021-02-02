import styled from 'styled-components'

const Menu = styled.aside`
  padding: 5.6rem 4rem;
  border-right: .1rem solid ${props => props.theme.colors.sidebarBorder};
  width: 30rem;
  height: 100%;
`

const MenuTitle = styled.h1`
  font-size: 2.8rem;
  
  span {
    color: ${props => props.theme.colors.primary.primaryRegular};
  }
`

export {
  Menu,
  MenuTitle
}
