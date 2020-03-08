import styled from 'styled-components'

import { Colors } from 'styles'
import { Twitter, LinkIcon } from '../Icons'
import IconCard from '../IconCard/IconCard'

export const StreamStarting = styled.div`
  width: 100vw;
  height: 100vh;
  background: transparent;
  background: linear-gradient(162.07deg, #BAFFC5 5.07%, #74AED6 80.61%);
  padding: 100px 174px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const IconCards = styled.div`
  display: flex;
  margin-top: 22px;
  margin-bottom: 170px;
`

export const Date = styled.time`
  color: rgba(28, 44, 53, .7);
  font-size: 27px;
  text-transform: uppercase;
  margin-bottom: 12px;
`

export const Title = styled.h1`
  font-size: 90px;
  color: ${Colors.blue10};
  margin: 0;
  max-width: 60vw;
  line-height: 120%;
`

export const TimeWrap = styled.div`
  display: flex;
  align-items: center;
`

export const StyledIconCard = styled(IconCard)`
  margin-right: 30px;
`

export const StyledTwitter = styled(Twitter)`
  width: 26px;
  height: 26px;

  path {
    fill: ${Colors.blue35};
  }
`

export const StyledLinkIcon = styled(LinkIcon)`
  width: 26px;
`
