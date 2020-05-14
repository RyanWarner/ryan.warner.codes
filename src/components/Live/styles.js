
import styled from 'styled-components'

import { Colors, Mixins } from 'styles'

export const LiveComponent = styled.a`
  width: 100%;
  margin-bottom: 80px;
`

export const Stream = styled.div`
  ${Mixins.outlineContainer};
`

export const StreamTitle = styled.div`
  padding: 16px;
  color: ${Colors.text10};
`

export const Img = styled.img`
  max-width: 100%;
`
