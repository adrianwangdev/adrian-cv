import styled from 'styled-components'

const SwitchThemeButton = styled.div` 
  position: fixed;
  top: 3.2rem;
  right: 3.2rem;
  
  @media(max-width: 768px) {
    top: unset;
    bottom: 3.2rem;
  }

  @media(max-width: 520px) {
    right: 2.4rem;
    bottom: 2.4rem;
  }

  label {
    display: block;
    padding: 0;
    cursor: pointer;
  }

  input[type=checkbox] {
    display: none;

    & + span {
        display: inline-block;
        padding-top: .8rem;
        padding-left: 3.4rem;
        border: 1px solid ${props => props.theme.colors.text.textMoreLight};
        border-radius: 1.8rem;
        height: 3.2rem;
        width: 9.4rem;
        font-size: 1.2rem;
        font-weight: bold;
        letter-spacing: .05rem;
        color: ${props => props.theme.colors.primary.primaryRegular};
        background-color: ${props => props.theme.colors.basic.white};
        transition: all .3s;
        user-select: none;
  
      &:after {
          content: "";
          position: absolute;
          top: .4rem;
          left: .4rem;
          display: block;
          border: 1px solid ${props => props.theme.colors.text.textMoreLight};
          border-radius: 1rem;
          width: 2rem;
          height: 2rem;
          background: ${props => props.theme.colors.basic.white};
          box-shadow: 0 0 .4rem rgba(0, 0, 0, .16);
          transition: all .3s;
        }
      }
  
    &:checked + span {
        padding-left: 1.3rem;
        border-color: ${props => props.theme.colors.primary.primaryLightest};
        background-color: ${props => props.theme.colors.basic.white};
  
      &:after {
          left: 6.6rem;
        }
      }
    }
  }
`

export {
  SwitchThemeButton
}
