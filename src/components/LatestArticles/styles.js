import styled from 'styled-components'
import { ChevronsRight } from 'react-feather'

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
  display: flex;
  align-items: center;
`

export const Chevrons = styled(ChevronsRight)`
  width: 16px;
  margin-left: 10px;
`
