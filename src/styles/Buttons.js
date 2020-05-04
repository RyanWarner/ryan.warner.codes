import { css } from 'styled-components'

import { Type, Colors } from 'styles'

export const primitive = css`
  font-family: ${Type.fontFamily};
`

export const primary = css`
  ${primitive};
  font-size: 16px;
  font-weight: ${Type.fontWeights.medium};
  border-radius: 6px;
  padding: 0 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.blue30};
  }
`
