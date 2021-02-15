import styled from 'styled-components'

const SkillTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -.8rem;

  > p {
    margin-right: .8rem;
    margin-bottom: .8rem;
    padding: .4rem 1.2rem;
    border-radius: 1.6rem;
    font-size: 1.4rem;
    color: ${props => props.theme.colors.text.textLight};
    background: ${props => props.theme.colors.primary.primaryLightest}
  }
`

export {
  SkillTag
}
