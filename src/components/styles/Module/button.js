import styled from 'styled-components'

const Button = styled.button`
  padding: .8rem 2.4rem;
  border: ${props =>
    props.primary
      ? 0
      : `.1rem solid ${props.theme.colors.primary.primaryRegular}`
  };
  border-radius: 2.4rem;
  font-family: 'Noto Sans TC', 'Microsoft JhengHei', '微軟正黑體', sans-serif;
  font-size: 2rem;
  color: ${props =>
    props.primary
      ? 'white'
      : props.theme.colors.primary.primaryRegular
  };
  background: ${props =>
    props.primary
      ? props.theme.colors.primary.primaryRegular
      : 'transparent'
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

export default Button
