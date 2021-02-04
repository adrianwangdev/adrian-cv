import styled from 'styled-components'

const AboutMeBlock = styled.div`
  opacity: ${props => props.show ? '1' : '0'};
  transition: ${props =>
    props.show ? 'all .6s .2s' : 'all .6s'
  };
  transform: ${props =>
    props.show ? 'translateX(0)' : 'translateX(120%)'
  };

  p, a {
    font-family: 'Noto Sans TC', 'Microsoft JhengHei', '微軟正黑體', sans-serif;
    font-weight: 400;
    letter-spacing: .1rem;
  }
`

const AvatarMask = styled.div`
  border-radius: 1.6rem;
  width: 16rem;
  height: 16rem;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
  }
`

const Description = styled.div`
  margin-top: 1.2rem;
  margin-bottom: 1.6rem;

  p, a {
    font-size: 1.4rem;
    line-height: 1.8;
    color: ${props => props.theme.colors.text.textDark};
  }
`

const JobTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: .8rem;

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

  > p:first-child {
    margin-right: 1.6rem;
  }
`

const SkillTag = styled.div`
  display: flex;
  flex-wrap: wrap;

  > p {
    margin-right: .8rem;
    margin-bottom: .8rem;
    padding: .4rem 1.2rem;
    border-radius: 1.4rem;
    font-size: 1.4rem;
    color: ${props => props.theme.colors.text.textLight};
    background: ${props => props.theme.colors.primary.primaryLightest}
  }
`


export {
  AboutMeBlock,
  AvatarMask,
  Description,
  JobTitle,
  Detail,
  Birth,
  SkillTag
}
