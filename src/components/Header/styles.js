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

export const Wordmark = styled.div`
  display: flex;
  align-items: center;
`

export const Name = styled(Link)`
  font-weight: bold;
  font-size: 16px;
  color: ${Colors.text10};
  margin-left: 20px;

  @media(min-width: ${Breakpoints.mobile}) {
    font-size: 18px;
  }
`
