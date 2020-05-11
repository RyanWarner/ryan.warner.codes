
import styled from 'styled-components'

import HeartClicker from '../HeartClicker/HeartClicker'
import { Breakpoints, ZIndex } from 'styles'

const mobileWidth = '90vw'
const mobileHeight = '300px'

export const HeartEmitterComponent = styled.div`
  width: 90vw;
  height: 90vw;
  max-width: 600px;
  max-height: 600px;
  position: relative;
  z-index: ${ZIndex.z1};

  @media(max-width: ${Breakpoints.mobile}) {
    max-width: ${mobileWidth};
    max-height: ${mobileHeight};
  }
`

export const HeartContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 90vw;
  height: 90vw;
  max-width: 600px;
  max-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: ${Breakpoints.mobile}) {
    max-width: ${mobileWidth};
    max-height: ${mobileHeight};
  }
`

export const StyledHeartClicker = styled(HeartClicker)`
  cursor: pointer;
  user-select: none;

  @media(max-width: ${Breakpoints.mobile}) {
    width: 100px;
  }

  @media(max-width: ${Breakpoints.w1024}) {
    width: 20vw;
    height: 20vw;
    max-width: 100px;
    max-height: 100px;
  }
`
