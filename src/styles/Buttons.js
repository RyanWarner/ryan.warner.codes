import { css } from 'styled-components'

import { Type, Colors } from 'styles'

export const primary = css`
  font-size: 16px;
  font-weight: ${Type.fontWeights.medium};
  border: 2px solid ${Colors.blue50};
  border-radius: 6px;
  height: 33px;
  padding: 0 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.text10};
  transition: all 300ms ease;

  &:hover {
    background-color: ${Colors.blue60};
  }
`
