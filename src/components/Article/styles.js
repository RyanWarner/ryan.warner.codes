
import styled from 'styled-components'
import { FileText, Youtube } from 'react-feather'

import { Breakpoints, Colors, Type } from 'styles'
import { Link } from '../'

export const ArticleComponent = styled.div`
  display: flex;
  align-items: center;
  max-width: 630px;

  a {
    text-decoration: none;

    &:hover {
      color: ${Colors.text10};
    }
  }
`

export const Title = styled.h2`
  margin: 0 0 8px 0;
  font-size: 18px;
  color: ${Colors.text10};
  font-weight: ${Type.fontWeights.bold};
  min-height: 30px;

  @media(min-width: ${Breakpoints.mobile}) {
    font-size: 20px;
  }
`

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:hover {
    ${Title} {
      color: ${Colors.glow10};
    }
  }
`

export const Description = styled.p`
  color: ${Colors.text20};
`

export const Icon = styled.div`
  padding: 25px;
`

export const StyledFileText = styled(FileText)`
  line, polyline, path {
    stroke: ${Colors.blue50};
  }
`

export const StyledYoutube = styled(Youtube)`
  line, polygon, path {
    stroke: ${Colors.blue50};
  }

  polygon {
    fill: ${Colors.blue50};
  }
`
