
import styled, { css } from 'styled-components'

import { Sizes, Shadows } from 'styles'

export const DiffViewerComponent = styled.div`
  width: ${Sizes.maxWidth};
  max-width: 100vw;
  padding: 0 ${Sizes.xPadding};
  box-sizing: border-box;
  margin-left: calc(-640px + 350px);
  margin-top: 3rem;
  margin-bottom: 3rem;

  ${props => !props.splitView && css`
    width: auto;
    margin-left: 0;
    padding: 0;
  `}
`

export const DiffViewerWrap = styled.div`
  font-size: 15px;
  box-shadow: ${Shadows.code};
  border-radius: 6px;
  overflow: hidden;

  table pre {
    line-height: 22px;
  }
`
