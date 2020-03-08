import React from 'react'

import * as S from './styles'

const title = 'Show and tell Sunday'
const date = 'Monday'

export default () =>
  <S.StreamStarting>
    <S.Date>{date}</S.Date>
    <S.Title>{title}</S.Title>
  </S.StreamStarting>
