
import styled from 'styled-components'

import HeartClicker from '../HeartClicker/HeartClicker'

export const HeartEmitterComponent = styled.div`
  width: 600px;
  height: 600px;
  position: relative;
  /* position: absolute;
  right: 30px;
  top: -155px; */
`

export const HeartContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledHeartClicker = styled(HeartClicker)`
  cursor: pointer;
`
