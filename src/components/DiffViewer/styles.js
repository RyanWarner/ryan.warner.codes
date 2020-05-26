
import styled, { css } from 'styled-components'

import { Mixins, Shadows, Sizes } from 'styles'

export const DiffViewerComponent = styled.div`
  box-sizing: border-box;
  margin-top: 0;
  margin-bottom: 3rem;
  max-width: ${Sizes.maxWidth};

  @media(max-width: ${Sizes.maxArticleWidth}) {
    ${Mixins.articleMaxWidth};
  }

  ${props => !props.splitView && css`
    margin-left: 0;
    ${Mixins.articleMaxWidth};
  `}
`

export const DiffViewerWrap = styled.div`
  font-size: 15px;
  border-radius: 6px;
  overflow: scroll;

  table pre {
    line-height: 22px;
  }
`
