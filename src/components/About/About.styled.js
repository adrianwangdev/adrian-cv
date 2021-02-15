import styled from 'styled-components'
import { SkillTag } from '../StyledModule/SkillTag.styled'

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

const AboutImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  img {
    width: 88%;
  }
`

export {
  AboutSkillTag,
  AboutImageWrapper
}
