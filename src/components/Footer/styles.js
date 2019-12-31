import styled from 'styled-components'

import { Breakpoints, Colors } from '../../styles'

export const Footer = styled.footer`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
`
