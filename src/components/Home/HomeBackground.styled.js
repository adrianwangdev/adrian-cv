import { animated } from 'react-spring'
import styled from 'styled-components'

const BackgroundBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

const BackgroundImage = styled(animated.img)`
  width: 100%;
  height: 100%;
`

export {
  BackgroundBlock,
  BackgroundImage
}
