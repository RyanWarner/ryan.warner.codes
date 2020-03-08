import styled from 'styled-components'

import { Colors } from 'styles'

export const StreamStarting = styled.div`
  width: 100vw;
  height: 100vh;
  background: transparent;
  background: linear-gradient(162.07deg, #BAFFC5 5.07%, #74AED6 80.61%);
  padding: 100px 174px;
  box-sizing: border-box;
`

export const Date = styled.time`
  color: rgba(28, 44, 53, .7);
  font-size: 27px;
  text-transform: uppercase;
`

export const Title = styled.h1`
  font-size: 90px;
  color: ${Colors.blue10};
  margin: 0;
`
