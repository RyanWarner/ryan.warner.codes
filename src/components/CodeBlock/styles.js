import styled from 'styled-components'

import { Shadows, Mixins } from 'styles'

export const Pre = styled.pre`
  overflow-x: scroll;
  border-radius: 6px;
  line-height: 150%;
  box-shadow: ${Shadows.code};
  padding: .9rem;
`

export const Wrap = styled.div`
  ${props => props.noWrap ? null : Mixins.articleMaxWidt}
`

export const Code = styled.code`
  display: inline-block;
  min-width: 100%;
  font-size: 15px;
  padding: 0;
`
