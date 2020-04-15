import styled from 'styled-components'
import { ChevronsRight } from 'react-feather'

import { Link } from '../'
import { Breakpoints, Colors, Type } from 'styles'

export const LatestArticles = styled.div`
  margin: 70px 0;
  max-width: 800px;

  @media(min-width: ${Breakpoints.mobile}) {
    margin: 106px 0;
  }
`

export const Articles = styled.div`
  border: 2px solid ${Colors.blue20};
  border-radius: 6px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`

export const Title = styled.h2`
  ${Type.capsTitle};
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
  padding: 6px 8px;

  &:hover {
    ${Chevrons} {
      transform: translateX(2px)
    }
  }
`
