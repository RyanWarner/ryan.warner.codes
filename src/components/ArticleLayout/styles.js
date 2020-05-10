import styled from 'styled-components'

import { Breakpoints, Colors, Mixins } from 'styles'
import ryan from 'images/ryan-warner.png'

export const Content = styled.article`
  margin-top: 20px;
  margin-bottom: 106px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: ${Breakpoints.mobile}) {
    margin-top: 70px;
  }
`

export const Title = styled.h1`
  margin-bottom: 12px;
  font-size: 26px;
  line-height: 34px;
  ${Mixins.articleMaxWidth};

  @media(min-width: ${Breakpoints.mobile}) {
    font-size: 36px;
    line-height: 50px;
  }
`

export const Meta = styled.div`
  margin-bottom: 35px;
  display: flex;
  ${Mixins.articleMaxWidth};

  @media(min-width: ${Breakpoints.mobile}) {
    margin-bottom: 60px;
  }
`

export const Author = styled.div``

export const Date = styled.time`
  font-size: 16px;
  color: ${Colors.blue50};
  display: block;
`
