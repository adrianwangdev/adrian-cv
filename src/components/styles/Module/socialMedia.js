import styled from 'styled-components'

const SocialMediaStyle = styled.div`
  ${props => props.inSidebar
    ? (`
      margin-top: -4rem;
      margin-left: -.6rem;
      margin-bottom: -2rem;
    `)
  : (`
      margin-top: 3.2rem;
      margin-left: 0;
    `)
  }
  ${props => props.show
    ? (`
      transition: all .6s .2s;
      transform: translateX(0);
      opacity: 1;
    `)
    : (`
      transition: all .6s;
      transform: translateX(120%);
      opacity: 0;
    `)
  }

  a {
    display: inline-block;
    margin-right: ${props =>
      props.inSidebar ? '.8rem' : '2.4rem'
    };
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
