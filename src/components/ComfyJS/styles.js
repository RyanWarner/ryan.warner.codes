
import styled, { keyframes } from 'styled-components'

import { Colors } from 'styles'
import { Heart } from '../Icons'

export const ComfyJSComponent = styled.div``

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale3d(.5, .5, .5);
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`

export const StyledHeart = styled(Heart)`
  animation: 300ms ${fadeIn} cubic-bezier(0.680, -0.550, 0.265, 1.550); /* easeInOutBack */
  margin-right: 10px;

  path {
    fill: ${Colors.red};
  }
`
