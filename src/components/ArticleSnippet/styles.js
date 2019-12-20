import styled from 'styled-components'

import { Colors } from '../../styles'
import { Link } from '../'

export const ArticleSnippet = styled(Link)`
  padding: 20px 0;
  display: flex;
`

export const Content = styled.div``

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`

export const Title = styled.h4`
  margin: 2px 0;
  font-size: 18px;
`

export const Date = styled.time`
  font-size: 12px;
  color: ${Colors.blue50};
`

export const AllArticles = styled(Link)``
