import styled from 'styled-components'

const InfoItem = styled.div`
  display: flex;
  margin-bottom: .8rem;
`

const InfoTitle = styled.p`
  margin-right: 1.6rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary.primaryRegular};
`

export {
  InfoItem,
  InfoTitle
}
