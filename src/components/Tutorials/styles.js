
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
  margin-bottom: 80px;
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
