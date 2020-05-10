import styled from 'styled-components'

import { ArticleWidth } from 'components'
import { Breakpoints, Sizes } from 'styles'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  z-index: 2;
  position: relative;
  padding-top: ${Sizes.navHeightMobile};

  @media(min-width: ${Breakpoints.mobile}) {
    padding-top: ${Sizes.navHeight};
  }
`

export const StyledWidth = styled(ArticleWidth)`
  margin-bottom: 100px;
`
