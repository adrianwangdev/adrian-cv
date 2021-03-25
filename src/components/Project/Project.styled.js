import styled from 'styled-components'
import { Column } from '@components/StyledModule/Grid.styled'

/* Images */
import ImageReadsPlatform from '@images/project/readsPlatform.png'
import ImageGreenfieldGrafik from '@images/project/greenfieldGrafik.png'
import ImageCuEAZ from '@images/project/cuEAZ.png'
import ImageWhatever from '@images/project/whatever.png'

const ProjectColumn = styled(Column)`
  margin-bottom: 3.2rem;
`

const Card = styled.a.attrs({
  target: '_blank'
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem 2.4rem 1.6rem 2.4rem;
  border-radius: 1.6rem;
  text-decoration: none;
  background: white;
  box-shadow: 0 .4rem 4rem rgba(0, 0, 0, .08);
  transition: all .3s;

  &:last-child {
    margin-bottom: 0;
  }
  
  &:hover {
    transform: translateY(-1.6rem);
  }
`

const PreviewImage = styled.div`
  border: 1px solid ${props => props.theme.colors.primary.primaryLightest};
  border-radius: .8rem;
  width: 100%;
  height: 20rem;
  background: ${props => {
    switch (props.$name) {
      case 'readsPlatform':
        return `url(${ImageReadsPlatform})`
      case 'greenfieldGrafik':
        return `url(${ImageGreenfieldGrafik})`
      case 'cuEAZ':
        return `url(${ImageCuEAZ})`
      case 'whatever':
        return `url(${ImageWhatever})`
      default:
        return props.theme.colors.primary.primaryLightest
    }
  }} no-repeat top center;
  background-size: cover;
`

const ProjectInfo = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 1.2rem;
  text-align: center;

  h3 {
    margin-bottom: .4rem;
    font-weight: 700;
    color: ${props => props.theme.colors.text.textDark};
  }

  p {
    font-size: 1.4rem;
    color: ${props => props.theme.colors.text.textLight};
  }

  span {
    position: absolute;
    top: -.8rem;
    right: 0;
    font-weight: 700;
    color: ${props => props.theme.colors.primary.primaryRegular};
  }
  
  ${props => props.$recently && `
    &::after {
      content: "New";
      position: absolute;
      top: -.8rem;
      right: 0;
      color: ${props.theme.colors.primary.primaryRegular};
      animation: jumping 2s infinite;
    }
  `}

  @keyframes jumping {
    0% { transform: translateY(0); }
    20% { transform: translateY(-.4rem); }
    25% { transform: translateY(0); }
    30% { transform: translateY(-.4rem); }
    35% { transform: translateY(0); }
  }
`

export {
  ProjectColumn,
  Card,
  PreviewImage,
  ProjectInfo
}
