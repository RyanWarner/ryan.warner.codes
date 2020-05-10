
import styled from 'styled-components'
import ReactPlayer from 'react-player'

import { Mixins } from 'styles'

export const MaxWidth = styled.div`
  ${Mixins.articleMaxWidth};
  margin-bottom: 40px;
`

export const VideoComponent = styled.div`
  align-self: flex-start;
  position: relative;
  padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */
`

export const Player = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`
