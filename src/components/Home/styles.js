import styled from 'styled-components'

import { Breakpoints } from 'styles'

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const ContentWrap = styled.div`
  display: flex;
  margin: 0 0 70px 0;

  @media(min-width: ${Breakpoints.mobile}) {
    margin: 0 0 106px 0;
  }
`
