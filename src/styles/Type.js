import { css, createGlobalStyle } from 'styled-components'

import { Colors } from '../styles'

const sansSerifFallback = "'-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Roboto', 'sans-serif'"
export const fontFace = `'Jost', ${sansSerifFallback}`
export const monospace = "Menlo, Monaco, 'Courier New', monospace"

export const fontWeights = {
  regular: 400,
  medium: 600,
  bold: 'bold'
}

export const body = css`
  font-size: 14px;
`

export const header1 = css`
  font-size: 43px;
  line-height: 152%;
  font-weight: ${fontWeights.bold};
`

export const header3 = css`
  font-size: 24px;
  line-height: 152%;
  font-weight: ${fontWeights.bold};
  margin: 0;
`


export const GlobalType = createGlobalStyle`
  body {
    font-family: ${fontFace};
  }

  h1 {
    ${header1};
  }

  h3 {
    ${header3};
  }

  p {
    margin: 0;
  }
  a {

    text-decoration: none;
    transition: color 300ms ease;

    &:hover {
      color: ${Colors.glow20};
    }
  }
`
