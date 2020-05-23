import styled from 'styled-components'

import { Breakpoints } from '../../styles'
import { ReactLogo, Heart, VSCode, Gatsby, Twitch } from 'components/Icons'

export const StyledReactLogo = styled(ReactLogo)`
  width: 22px;
  height: 22px;

  @media(min-width: ${Breakpoints.mobile}) {
    width: 28px;
    height: 28px;
  }
`

export const StyledHeart = styled(Heart)`
  width: 16px;
  height: 16px;

  @media(min-width: ${Breakpoints.mobile}) {
    width: 22px;
    height: 22px;
  }
`

export const StyledVSCode = styled(VSCode)`
  width: 22px;
  height: 22px;

  @media(min-width: ${Breakpoints.mobile}) {
    width: 28px;
    height: 28px;
  }
`


export const ScreenFlow = styled.img`
  width: 18px;
  height: 18px;

  @media(min-width: ${Breakpoints.mobile}) {
    width: 24px;
    height: 24px;
  }
`

export const StyledGatsby = styled(Gatsby)`
  width: 18px;
  height: 18px;

  @media(min-width: ${Breakpoints.mobile}) {
    width: 22px;
    height: 22px;
  }
`

export const StyledTwitch = styled(Twitch)`
  width: 18px;
  height: 18px;

  @media(min-width: ${Breakpoints.mobile}) {
    width: 22px;
    height: 22px;
  }
`
