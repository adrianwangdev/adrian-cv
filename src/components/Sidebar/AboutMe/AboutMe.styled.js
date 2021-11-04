import styled from 'styled-components'

const AboutMeBlock = styled.div`
  margin-top: ${props => props.show ? '-2.4rem': '0'};
  opacity: ${props => props.show ? '1' : '0'};
  transition: all .3s;

  @media (max-width: 576px) {
    margin-top: ${props => props.show ? '2rem' : '0'};
  }

  p, a {
    font-family: 'Noto Sans TC', 'Microsoft JhengHei', '微軟正黑體', sans-serif;
    font-weight: 400;
    letter-spacing: .1rem;
  }
`

const AvatarMask = styled.div`
  border-radius: 1.6rem;
  width: 12rem;
  height: 12rem;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
  }
`

const Description = styled.div`
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;

  @media (max-width: 576px) {
    margin-top: .8rem;
    margin-bottom: .8rem;
  }

  p, a {
    font-size: 1.4rem;
    line-height: 1.8;
    color: ${props => props.theme.colors.text.textDark};
  }
`

const JobTitle = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-right: 1.6rem;
    font-size: 2.4rem;

    @media (max-width: 576px) {
      margin-right: 1.2rem;
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.6rem;
    color: ${props => props.theme.colors.text.textLight};

    @media (max-width: 576px) {
      font-size: 1.4rem;
    }
  }
`

const Detail = styled.div`
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary.primaryRegular};
    transition: all .3s;

    &:hover {
      color: ${props => props.theme.colors.primary.primaryDark};
    }
  }
`
const Birth = styled.div`
  display: flex;

  p {
    margin-right: 1.6rem;

    @media (max-width: 576px) {
      margin-right: 1.2rem;
    }
  }

  > p:last-child {
    margin-right: 0;

  }
`

export {
  AboutMeBlock,
  AvatarMask,
  Description,
  JobTitle,
  Detail,
  Birth
}
