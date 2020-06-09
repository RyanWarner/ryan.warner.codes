
import styled from 'styled-components'

import { Mixins } from 'styles'

export const EggheadVideoComponent = styled.div`
  ${Mixins.articleMaxWidth};
  margin-bottom: 20px;
`

export const FrameWrap = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
`

export const Frame = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: 0;
`
