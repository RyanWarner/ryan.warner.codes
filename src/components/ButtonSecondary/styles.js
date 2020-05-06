
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Buttons, Colors, Type } from 'styles'

export const SecondaryButtonComponent = styled(motion.button)`
  ${Buttons.primary};
  background-color: ${Colors.blue30};
  color: ${Colors.text20};
  font-weight: ${Type.fontWeights.medium};
  font-size: 18px;
  padding: 12px 20px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${Colors.glow20};
  }

  &:focus:not(.focus-visible) {
    outline: none;
    box-shadow: none;
  }
`
