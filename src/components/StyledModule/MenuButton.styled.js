import styled from 'styled-components'

const MenuButton = styled.div`
  display: none;
  position: absolute;
  top: 3.2rem;
  left: 3.2rem;
  cursor: pointer;
  z-index: 1;
  transition: all .4s;
  transform: ${props =>
    props.isMenuOpen ? 'translateX(30rem)' : '0'
  };

  path {
    fill: ${props =>
      props.isMenuOpen
        ? props.theme.colors.background.backgroundDefault
        : props.theme.colors.text.textDark
    };
    transition: all .2s ease-in;
  }

  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 576px) {
    top: 3.6rem;
    left: ${props =>
      props.isMenuOpen ? '-4rem' : '2.4rem'
    };
  }
`

export {
  MenuButton
}
