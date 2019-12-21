import styled from 'styled-components'

import { Colors } from '../../styles'
import { Link } from '../'

export const ArticleSnippet = styled(Link)`
  padding: 6px 16px;
  display: flex;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  transition: background .2s ease-in-out;
  margin-bottom: 16px;

  &:hover {
    background-color: ${Colors.glowOpacity};
  }
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
  color: ${Colors.text10};
`

export const Date = styled.time`
  font-size: 12px;
  color: ${Colors.blue50};
`
