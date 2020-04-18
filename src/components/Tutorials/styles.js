
import styled from 'styled-components'

import { Breakpoints, Colors, Mixins } from 'styles'

export const TutorialsComponent = styled.div`
  ul {
    ${Mixins.outlineContainer};
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
    margin-bottom: 34px;
    padding-bottom: 34px;
    border-bottom: 1px solid ${Colors.blue30};

    &:last-child {
      border: 0;
    }

    @media(min-width: ${Breakpoints.mobile}) {
      margin-bottom: 49px;
      padding-bottom: 49px;
    }
  }
`
