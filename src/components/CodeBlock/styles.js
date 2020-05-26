import styled from 'styled-components'

import { Mixins } from 'styles'

export const Pre = styled.pre`
  overflow-x: scroll;
  border-radius: 6px;
  line-height: 150%;
  padding: .9rem;
  margin-top: 0;
`

export const Wrap = styled.div`
  ${props => props.noWrap ? null : Mixins.articleMaxWidth};
`

export const Code = styled.code`
  display: inline-block;
  min-width: 100%;
  font-size: 15px;
  padding: 0;
`
