import styled from 'styled-components'

const Menu = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 30rem;
  width: 30rem;
  padding: 3.2rem;
  border-right: .1rem solid ${props => props.theme.colors.sidebarBorder};
  height: 100%;
  overflow: hidden;
`

const MenuTitle = styled.div`
  font-size: 2.8rem;
  color: ${props =>
    props.onlyName
      ? props.theme.colors.text.textDark
      : props.theme.colors.primary.primaryRegular};
  transition: all .6s;
  height: ${props => props.hide ? '0' : '3.4rem'};
  opacity: ${props => props.hide ? '0' : '1'};
  overflow: hidden;
  
  span {
    color: ${props => props.theme.colors.text.textDark};
    opacity: ${props => props.onlyName ? '0' : '1'};
    transition: all .4s;
  }
`

export {
  Menu,
  MenuTitle
}
