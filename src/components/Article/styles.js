
import styled from 'styled-components'

import { Colors } from 'styles'

export const ArticleComponent = styled.div`
  max-width: 630px;

  a {
    text-decoration: none;

    &:hover {
      color: ${Colors.text10};
    }
  }
`

export const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 14px;
  margin-top: 18px;
  color: ${Colors.text10};
`

export const Date = styled.time`
  font-size: 14px;
  color: ${Colors.blue50};
  margin-top: 3px;
  display: block;
`

export const Description = styled.p`
  color: ${Colors.text20};
`

export const ReadMore = styled.p`
  color: ${Colors.blue50};
  margin-top: 25px;
  display: block;
  transition: all 200ms ease;

  &:hover {
    color: ${Colors.text10};
  }
`
