import { createGlobalStyle } from 'styled-components'

import { Colors } from './'

export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    background-color: ${Colors.blue10};
    max-width: 100vw;
  }

  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    max-width: 100vw;
    background-color: ${Colors.blue15};
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
`
