
import styled from 'styled-components'

import { Breakpoints } from 'styles'

export const TutorialsComponent = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  @media(min-width: ${Breakpoints.mobile}) {
    flex-direction: row;
  }

  ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 48% 48%;
    grid-column-gap: 4%;
    grid-row-gap: 4%;
  }

  li {
    list-style-type: none;
  }
`

export const Tutorials = styled.div`
  width: 100%;
`

export const Filters = styled.div`
  width: 100%;
  flex-shrink: 0;
  margin-right: 0;
  margin-bottom: 40px;

  @media(min-width: ${Breakpoints.mobile}) {
    width: 320px;
    margin-right: 40px;
  }
`
