import { css } from 'styled-components'

import { Colors, Type } from 'styles'

export const filter = css`
  font-size: 18px;
  font-family: ${Type.fontFamily};
  border: 2px solid transparent;
  border-radius: 6px;
  height: 33px;
  padding: 6px 35px 6px 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.text10};
  transition: all 300ms ease;
  background-color: ${Colors.blue10};

  ::placeholder {
    color: ${Colors.text20};
  }

  &:hover {
    border: 2px solid ${Colors.blue30};
  }

  &:focus {
    border: 2px solid ${Colors.blue40};
    outline: 0;
  }
`
