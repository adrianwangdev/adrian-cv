import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Column = styled.div`
  margin-right: 3.2rem;
  width: calc(50% - 1.6rem);

  @media (max-width: 1200px) {
    margin-right: 0;
    margin-bottom: 2.4rem;
    width: 100%;
  }

  &:last-child {
    margin-right: 0;

    @media (max-width: 1200px) {
      margin-bottom: 0;
    }
  }
`

export {
  Row,
  Column
}
