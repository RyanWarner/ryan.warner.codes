import styled from 'styled-components'

import { Colors } from '../../styles'

export const Footer = styled.footer`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Credits = styled.div`
  p {
    font-size: 16px;
    color: ${Colors.text20};
    line-height: 180%;
  }
`
