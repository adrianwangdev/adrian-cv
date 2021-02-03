import styled from 'styled-components'

const SocialMediaStyle = styled.div`
  margin-top: ${props =>
    props.inSidebar ? '0' : '3.2rem'
  };
  margin-left: ${props =>
    props.inSidebar ? '-.6rem' : '0'
  };

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
