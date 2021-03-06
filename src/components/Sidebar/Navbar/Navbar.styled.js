import styled from 'styled-components'

const Nav = styled.nav`
  transition: ${props =>
    props.moveDown ? 'all .6s' : 'all .6s .1s'
  };
  transform: ${props =>
    props.moveDown ? 'translateY(-8%)' : 'translateY(-64%)'
  };

  @media (max-width: 576px) {
    transform: ${props =>
      props.moveDown ? 'translateY(8%)' : 'translateY(-64%)'
    };
  }
  
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
    transition: all .3s;

    svg {
      margin-right: 2.4rem;
      
      path {
        stroke: ${props => props.theme.name === 'darkMode' && `
          ${props.theme.colors.text.textDark};
        `}
      }
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
