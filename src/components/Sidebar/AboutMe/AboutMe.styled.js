import styled from 'styled-components'

const AboutMeBlock = styled.div`
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
  }
  p {
    font-size: 1.6rem;
    color: ${props => props.theme.colors.text.textLight};
  }
`

const Detail = styled.div`
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary.primaryRegular};
    transition: all .4s;

    &:hover {
      color: ${props => props.theme.colors.primary.primaryDark};
    }
  }
`
const Birth = styled.div`
  display: flex;

  p {
    margin-right: 1.6rem;
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
