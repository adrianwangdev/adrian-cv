import styled from 'styled-components'

const SectionTitleStyled = styled.div`
  display: inline-block;
  font-size: 2.4rem;
  margin-bottom: 4rem;
  animation: fadeInDown .6s;

  img {
    position: absolute;
    bottom: -.8rem;
    right: -2.4rem;
  }

  span {
    display: inline-block;
    margin-left: 1.6rem;
    font-weight: 400;
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-4rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export {
  SectionTitleStyled
}
