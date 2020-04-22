
import styled from 'styled-components'

import { Sizes } from 'styles'

export const DiffViewerComponent = styled.div`
  width: ${Sizes.maxWidth};
  max-width: 100vw;
  padding: 0 ${Sizes.xPadding};
  box-sizing: border-box;
  margin-left: calc(-640px + 350px);
  margin-bottom: 5rem;
`

export const DiffViewerWrap = styled.div`
  font-size: 15px;
  box-shadow: 0 5px 23px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  overflow: hidden;

  table pre {
    line-height: 22px;
  }
`
