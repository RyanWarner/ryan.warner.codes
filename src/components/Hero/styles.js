import styled from 'styled-components'

import { Colors, Type } from '../../styles'

export const Hero = styled.div`
`

const maxWidth = '652px'

export const H1 = styled.h1`
  background: linear-gradient(${Colors.glow10}, ${Colors.glow20});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: ${maxWidth};
`

export const SubHeader = styled.p`
  font-size: 18px;
  font-weight: ${Type.fontWeights.medium};
  max-width: ${maxWidth};
`
