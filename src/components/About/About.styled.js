import styled from 'styled-components'
import { SectionWrapper } from '../StyledModule/SectionWrapper.styled'
import { SkillTag } from '../StyledModule/SkillTag.styled'

const AboutSectionWrapper = styled(SectionWrapper)`
  letter-spacing: .1rem;

  h3 {
    margin-bottom: 2.4rem;
  }

  p {
    font-family: 'Noto Sans TC', 'Microsoft JhengHei', '微軟正黑體', sans-serif;
    font-weight: 400;
    letter-spacing: .1rem;
  }

  .infoItem {
    display: flex;
    margin-bottom: .8rem;
    
    .title {
      margin-right: 1.6rem;
      font-weight: 700;
      color: ${props => props.theme.colors.primary.primaryRegular};
    }
  }
`

const AboutSkillTag = styled(SkillTag)`
  > p {
    margin-right: 1.6rem;
    margin-bottom: 1.6rem;
    background: ${props => props.theme.colors.background.backgroundLight};

    &.familiar {
    background: ${props => props.theme.colors.primary.primaryLightest};
    }
  }
`

export {
  AboutSectionWrapper,
  AboutSkillTag
}
