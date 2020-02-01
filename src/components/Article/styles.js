
import styled from 'styled-components'

import { Colors } from 'styles'
import { Link } from '../'

export const ArticleComponent = styled.div`
  max-width: 630px;

  a {
    text-decoration: none;

    &:hover {
      color: ${Colors.text10};
    }
  }
`

export const StyledLink = styled(Link)`
  display: block;
`

export const Title = styled.h2`
  margin-bottom: 14px;
  margin-top: 10px;
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
