
import styled, { keyframes, css } from 'styled-components'
import { motion } from 'framer-motion'

import { Buttons, Colors, Type } from 'styles'

const animatedGradients = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

export const ButtonComponent = styled(motion.button)`
  ${Buttons.primary};
  background-color: ${Colors.glow20};
  color: ${Colors.blue00};
  font-weight: ${Type.fontWeights.bold};
  font-size: 20px;
  padding: 12px 20px;
  background: linear-gradient(60deg, ${Colors.rainbowGreen}, ${Colors.rainbowBlue}, ${Colors.rainbowIndigo}, ${Colors.rainbowViolet});
  background-size: 300% 300%;
  animation: ${animatedGradients} 7s ease alternate infinite;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${Colors.glow20};
  }

  &:focus:not(.focus-visible) {
    outline: none;
    box-shadow: none;
  }
`
