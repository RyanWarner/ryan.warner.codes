import styled from 'styled-components'

import { Shadows } from 'styles'

export const Pre = styled.pre`
  overflow-x: scroll;
  border-radius: 6px;
  line-height: 150%;
  box-shadow: ${Shadows.code};
  padding: .9rem;
`

export const Code = styled.code`
  display: inline-block;
  min-width: 100%;
  font-size: 16px;
  padding: 0;
`
