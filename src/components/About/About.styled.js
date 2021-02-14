import styled from 'styled-components'
import { SectionWrapper } from '../StyledModule/SectionWrapper.styled'

const AboutSectionWrapper = styled(SectionWrapper)`
  letter-spacing: .1rem;

  h3 {
    margin-bottom: 2.4rem;
  }

  .infoItem {
    display: flex;
    margin-bottom: .8rem;
    font-family: 'Noto Sans TC', 'Microsoft JhengHei', '微軟正黑體', sans-serif;
    /* letter-spacing: .1rem; */
    
    .title {
      margin-right: 1.6rem;
      font-weight: 700;
      color: ${props => props.theme.colors.primary.primaryRegular};
    }
  }

  .container {
    /* padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    width: 100%; */
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    /* margin-right: -15px;
    margin-left: -15px; */
  }

  .column {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    margin-right: 3.2rem;

    &:last-child {
      margin-right: 0;
    }
  }
`

/* Create 2 column grid */

export {
  AboutSectionWrapper
}
