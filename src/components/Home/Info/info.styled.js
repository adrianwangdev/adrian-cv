import styled from 'styled-components'

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3.2rem 0;
`

const EnglishName = styled.h3`
  font-size: 2rem;
  color: ${props => props.theme.colors.text.textMoreLight};
`

const ChineseName = styled.h2`
  font-size: 4rem;
  letter-spacing: .1rem;
  color: ${props => props.theme.colors.text.textDark};
`

const Description = styled.p`
  margin-top: 1.6rem;
  letter-spacing: .1rem;
  color: ${props => props.theme.colors.text.textLight};
`

export {
  InfoBlock,
  EnglishName,
  ChineseName,
  Description
}
