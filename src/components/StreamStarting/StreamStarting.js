import React from 'react'
import dayjs from 'dayjs'

import * as S from './styles'
import { Timer } from '../'
import { Time } from '../Icons'

const title = 'Show and tell Sunday'
const date = dayjs().format('dddd, MMM DD YYYY')

export default () =>
  <S.StreamStarting>
    <S.Date>{date}</S.Date>
    <S.Title>{title}</S.Title>
    <S.TimeWrap>
      <Time />
      <Timer />
    </S.TimeWrap>
  </S.StreamStarting>
