import React from 'react'
import dayjs from 'dayjs'

import * as S from './styles'

const title = 'Show and tell Sunday'
const date = dayjs().format('dddd, MMM DD YYYY')

export default () =>
  <S.StreamStarting>
    <S.Date>{date}</S.Date>
    <S.Title>{title}</S.Title>
  </S.StreamStarting>
