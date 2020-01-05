import styled from 'styled-components'

import { Breakpoints, Colors } from 'styles'
import { Width } from 'components'

export const Footer = styled.footer`
  width: 100vw;
  background-color: ${props => props.disableBackground ? 'transparent' : Colors.blue20};
  display: flex;
  justify-content: center;
  margin-top: auto;

  @media(max-width: ${Breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 55px 0;
  }
`

export const Credits = styled.div`
  @media(max-width: ${Breakpoints.mobile}) {
    margin-bottom: 40px;
  }

  p {
    font-size: 16px;
    color: ${Colors.text20};
    line-height: 180%;
  }

  a {
    text-decoration: none;
  }
`

export const StyledWidth = styled(Width)`
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: ${Breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 0;
    padding-bottom: 0;
  }
`
