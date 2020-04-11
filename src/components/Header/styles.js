import styled from 'styled-components'
import { Link } from 'gatsby'

import { Breakpoints, Colors, Sizes } from 'styles'
import { Heart } from 'components/Icons'

export const Background = styled.div`
  width: 100vw;
  height: ${Sizes.navHeight};
  background-color: ${Colors.blue00};
  display: flex;
  justify-content: center;
  align-items: center;
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
`

export const Wordmark = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`

export const StyledHeart = styled(Heart)`
  width: 20px;
`
