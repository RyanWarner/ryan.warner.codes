import styled from 'styled-components'

import { Colors, Type } from '../../styles'
import { Link } from '../'
import { ReactLogo, Heart } from 'components/Icons'

export const ArticleSnippet = styled(Link)`
  padding: 6px 16px;
  width: 100%;
  display: flex;
  border-radius: 6px;
  cursor: pointer;
  transition: background .2s ease-in-out;
  margin-bottom: 16px;
  left: -16px;
  position: relative;

  &:hover {
    background-color: ${Colors.glowOpacity};

    &:after {
      content: '';
      display: block;
      width: 4px;
      height: 100%;
      background-color: #DEFFE7;
      position: absolute;
      left: 0;
      top: 0;
      box-shadow: 3px 0 22px rgba(14, 255, 77, .5);
      border-radius: 6px 0 0 6px;
    }
  }
`

export const Content = styled.div``

export const Title = styled.h4`
  margin: 0;
  font-size: 18px;
  color: ${Colors.text10};
  font-weight: ${Type.fontWeights.medium};
  min-height: 30px;
`

export const Date = styled.time`
  font-size: 12px;
  color: ${Colors.blue50};
  margin-top: 3px;
  display: block;
`

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
`

export const StyledReactLogo = styled(ReactLogo)`
  width: 22px;
  height: 22px;
`

export const StyledHeart = styled(Heart)`
  width: 16px;
  height: 16px;
`
