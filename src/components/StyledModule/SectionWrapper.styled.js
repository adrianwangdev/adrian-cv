import styled from 'styled-components'

const SectionWrapper = styled.section`
  padding: 2.4rem 4rem;
  width: 100%;
  letter-spacing: .1rem;
  animation: fadeIn .4s;
  overflow-y: auto;
  background: ${props =>
    props.Special && props.theme.colors.background.backgroundSpecial
  };

  @media (max-width: 576px) {
    padding: 2.4rem;
  }

  h3 {
    margin-bottom: 2.4rem;
    font-weight: 400;
  }

  h3, p {
    font-family: 'Noto Sans TC', 'Microsoft JhengHei', '微軟正黑體', sans-serif;
  }

  p {
    line-height: 1.8;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`

export {
  SectionWrapper
}
