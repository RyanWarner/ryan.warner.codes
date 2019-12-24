import styled from 'styled-components'

import { Colors, Type } from '../../styles'
import { Link } from '../'
import { ReactLogo, Heart, Amplitude } from 'components/Icons'

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

export const Title = styled.h4`
  margin: 2px 0;
  font-size: 18px;
  color: ${Colors.text10};
  font-weight: ${Type.fontWeights.medium};
`

export const Date = styled.time`
  font-size: 12px;
  color: ${Colors.blue50};
`

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledReactLogo = styled(ReactLogo)`
  width: 26px;
  height: 26px;
`

export const StyledHeart = styled(Heart)`
  width: 16px;
  height: 16px;
`
