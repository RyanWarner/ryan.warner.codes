import styled from 'styled-components'
import { Link } from 'gatsby'

import { Breakpoints, Sizes, ZIndex } from 'styles'
import { Heart } from 'components/Icons'

export const Background = styled.div`
  width: 100vw;
  height: ${Sizes.navHeightMobile};
  background-color: rgba(13, 21, 26, 0.78);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${ZIndex.z3};
  position: fixed;
  top: 0;

  @media(min-width: ${Breakpoints.mobile}) {
    height: ${Sizes.navHeight};
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  @media(max-width: ${Breakpoints.mobile}) {
    padding: 30px 0;
  }
`

export const MainNav = styled.div`
  display: flex;
  align-items: center;
`

export const Wordmark = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 12px;
  margin-left: -12px;
`

export const StyledHeart = styled(Heart)`
  width: 20px;
`
