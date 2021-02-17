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
  background: ${props => props.theme.colors.background.backgroundDefault};
  transition: all .4s;

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transform: ${props =>
      props.isMenuOpen ? 'translateX(0)' : 'translateX(-30rem)'
    };
    box-shadow: ${props =>
      props.isMenuOpen ? '.4rem 0 4rem rgba(0, 0, 0, .24)' : '0'
    };
  }
  @media (max-width: 576px) {
    justify-content: flex-start;
    min-width: 24rem;
    width: 24rem;
    padding: 2rem;
  }

  &::after {
    @media (max-width: 768px) {
      content: '';
      display: ${props =>
        props.isMenuOpen ? 'block' : 'none'
      };
      position: absolute;
      top: 0;
      left: 30rem;
      width: 500%;
      height: 100%;
      background: rgba(0,0,0,.4);
    }
    @media (max-width: 576px) {
      left: 24rem;
    }
  }
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

  @media (max-width: 576px) {
    margin-top: ${props => props.hide ? '0' : '1.6rem'};
  }
  
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
