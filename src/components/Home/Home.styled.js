import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-size: cover;
`

const Avatar = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
`

const LinkButton = styled(Link)`
  padding: .8rem 2.4rem;
  border-radius: 2.4rem;
  font-family: 'Noto Sans TC', 'Microsoft JhengHei', '微軟正黑體', sans-serif;
  font-size: 2rem;
  text-decoration: none;
  color: ${props =>
    props.theme.colors.basic.white
  };
  background: ${props =>
    props.theme.colors.primary.primaryRegular
  };
  transition: all .3s;
  cursor: pointer;
  user-select: none;

  &:hover {
    transform: translateY(-.8rem);
  }

  &:focus {
    outline: none;
  }
`

export {
  Section,
  Avatar,
  LinkButton
}
