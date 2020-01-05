
import styled, { css } from 'styled-components'

import { Colors } from 'styles'

const underline = css`
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: all 165ms ease;
`

const link = css`
  position: relative;
  display: inline-block;
  cursor: pointer;
  color: ${props => props.color};
  transition: all 265ms ease;

  &:hover {
    color: #DEFFE7;
    background: ${Colors.glowOpacity};

    &:after {
      content: '';
      position: absolute;
      background-color: #DEFFE7;
      box-shadow: 0 -1px 4px rgba(14, 255, 77, 1), 0 -2px 7px rgba(14, 255, 77, 1), 0 -2px 18px rgba(14, 255, 77, .7);
    }
  }
`

export const UnderlineLinkComponent = styled.a`
  ${link};
  color: ${Colors.text10};

  &:after {
    ${underline};
    background-color: ${props => props.color};
  }
`
