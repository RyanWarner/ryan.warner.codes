
import styled from 'styled-components'

import { Mixins } from 'styles'

export const LiveComponent = styled.div`
  width: 100%;
  margin-bottom: 80px;
`

export const Stream = styled.div`
  ${Mixins.outlineContainer};
`

export const StreamTitle = styled.div`
  padding: 16px;
`

export const Img = styled.img`
  max-width: 100%;
`
