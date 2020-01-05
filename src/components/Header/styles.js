import styled from 'styled-components'
import { Link } from 'gatsby'

import { Breakpoints, Colors } from 'styles'

export const Header = styled.header`
  padding: 65px 0;
  display: flex;
  justify-content: space-between;

  @media(max-width: ${Breakpoints.mobile}) {
    padding: 30px 0;
  }
`

export const Wordmark = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`

export const Name = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${Colors.text10};
  margin-left: 22px;
  display: none;

  @media(min-width: ${Breakpoints.mobile}) {
    font-size: 18px;
    display: block;
  }
`
