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
  margin-bottom: 32px;
`

export const Title = styled.h3`
  margin: 0;
  color: ${Colors.text10};
`

export const Chevrons = styled(ChevronsRight)`
  width: 16px;
  margin-left: 8px;
  transition: all 200ms ease;
`

export const AllArticles = styled(Link)`
  color: ${Colors.text10};
  display: flex;
  align-items: center;

  &:hover {
    ${Chevrons} {
      transform: translateX(2px)
    }
  }
`
