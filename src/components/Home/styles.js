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
  flex-direction: column;
  
  @media(min-width: ${Breakpoints.mobile}) {
    flex-direction: row;
    margin: 0 0 106px 0;
  }
`

export const RightCol = styled.div`
  width: 100%;
  flex-shrink: 0;
  margin-top: 80px;
  
  @media(min-width: ${Breakpoints.mobile}) {
    width: 323px;
    margin-top: 0;
  }
`
