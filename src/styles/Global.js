import { createGlobalStyle } from 'styled-components'

import { Colors, Type } from './'

export const GlobalStyle = createGlobalStyle`
  html, body {
    min-height: 100vh;
    ${Type.body};
    font-family: ${Type.fontFace};
    margin: 0;
    padding: 0;
    max-width: 100vw;
    overflow-x: hidden;
    background-color: ${Colors.blue10};
    background: linear-gradient(145.87deg, #1C2A34 10.36%, #111A20 49.58%, #111A20 49.58%);
    color: ${Colors.text10};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  div {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }

  ::selection {
    background: ${Colors.blue40};
    color: ${Colors.text10};
  }

  #app {
    min-height: 100%;
  }
`
