import styled from 'styled-components'

import { Breakpoints, Colors, Type } from '../../styles'
import { Link } from '../'
import { Clock, PlayCircle } from 'react-feather'

export const TutorialSnippet = styled(Link)`
  padding: 24px 20px 24px 0;
  width: 100%;
  display: flex;
  cursor: pointer;
  transition: background .2s ease-in-out;
  position: relative;
  box-sizing: border-box;
  border-bottom: 1px solid ${Colors.blue20};

  &:last-child {
    margin-bottom: 0;
  }

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
      border-radius: 6px 0 0 0;
    }
  }

  @media(min-width: ${Breakpoints.mobile}) {
    padding: 32px 26px 32px 0;
  }
`

export const Content = styled.div``

export const Title = styled.h4`
  margin: 0;
  font-size: 18px;
  color: ${Colors.text10};
  font-weight: ${Type.fontWeights.medium};
  min-height: 30px;

  @media(max-width: ${Breakpoints.mobile}) {
    font-size: 16px;
  }
`

export const Date = styled.time`
  font-size: 12px;
  color: ${Colors.blue50};
  display: block;
  font-weight: ${Type.fontWeights.medium};
`

export const Icon = styled.div`
  width: 50px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  @media(min-width: ${Breakpoints.mobile}) {
    width: 90px;
    height: 30px;
  }
`

export const Meta = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
`

export const ContentMeta = styled.div`
  display: flex;
  align-items: center;
`

export const Length = styled.p`
  font-size: 12px;
  font-weight: ${Type.fontWeights.medium};
  color: ${Colors.blue50};
`

export const Emdot = styled.p`
  color: ${Colors.blue40};
  margin: 0 7px;
  font-size: 12px;
`
