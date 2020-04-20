import styled from 'styled-components'
import { ChevronsRight } from 'react-feather'

import { Link } from '../'
import { Colors, ZIndex, Mixins } from 'styles'

export const LatestArticles = styled.div`
  max-width: 737px;
  width: 100%;
  margin-right: 60px;
  z-index: ${ZIndex.z2};
`

export const Articles = styled.div`
  ${Mixins.outlineContainer};
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 32px;
`

export const Chevrons = styled(ChevronsRight)`
  width: 16px;
  margin-left: 8px;
  transition: all 200ms ease;
`

export const All = styled(Link)`
  color: ${Colors.text10};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 0.2ch;

  &:hover {
    ${Chevrons} {
      transform: translateX(2px)
    }
  }
`
