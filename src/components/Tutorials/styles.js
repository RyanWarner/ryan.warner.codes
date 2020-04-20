
import styled from 'styled-components'

import { Breakpoints, Colors, Mixins } from 'styles'

export const TutorialsComponent = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  @media(min-width: ${Breakpoints.mobile}) {
    flex-direction: row;
  }

  ul {
    ${Mixins.outlineContainer};
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
    padding: 30px 30px 30px 0;
    border-bottom: 1px solid ${Colors.blue30};

    &:last-child {
      border: 0;
    }

    @media(min-width: ${Breakpoints.mobile}) {
      padding: 30px 30px 30px 0;
    }
  }
`

export const Tutorials = styled.div`
  width: 100%;
`

export const Filters = styled.div`
  width: 320px;
  flex-shrink: 100%;
  margin-right: 40px;
`
