import styled from 'styled-components'

import { Breakpoints, Colors } from 'styles'
import ryan from 'images/ryan-warner.png'

export const Content = styled.div`
  margin-bottom: 106px;
`

export const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 54px;

  @media(max-width: ${Breakpoints.mobile}) {
    font-size: 30px;
    line-height: 38px;
  }
`

export const Meta = styled.div`
  margin-bottom: 60px;
  display: flex;
`

export const Text = styled.div`
`

export const Image = styled.div`
  width: 45px;
  height: 45px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  margin-right: 15px;
  background-image: url(${ryan});
  background-size: cover;
  background-position: center;

  @media(max-width: ${Breakpoints.mobile}) {
    width: 35px;
    height: 35px;
  }
`

export const Author = styled.div``

export const Date = styled.time`
  font-size: 14px;
  color: ${Colors.blue50};
  margin-top: 3px;
  display: block;
`
