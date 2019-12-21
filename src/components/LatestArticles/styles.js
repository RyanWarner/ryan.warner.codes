import styled from 'styled-components'

import { Link } from '../'
import { Colors } from 'styles'

export const LatestArticles = styled.div`
  margin: 106px 0;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h3`
  margin-bottom: 20px;
`

export const AllArticles = styled(Link)`
  color: ${Colors.text10};
`
