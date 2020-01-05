
import styled from 'styled-components'

import { Colors } from 'styles'
import { Link } from '../'

export const ArticleComponent = styled.div`
  max-width: 630px;

  a {
    &:hover {
      color: ${Colors.text10};
    }
  }
`

export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
  margin-top: 8px;
`

export const Date = styled.time`
  font-size: 12px;
  color: ${Colors.blue50};
  margin-top: 3px;
  display: block;
`

export const Description = styled.p``

export const ReadMore = styled(Link)`
  color: ${Colors.blue50};
  margin-top: 25px;
  display: block;
`

export const P = styled.p`
 font-size: 15px;
 margin-bottom: 24px;
`

export const Ul = styled.ul``

export const Li = styled.li`
 font-size: 16px;
 margin-bottom: 1rem;
 list-style-type: none;
`
