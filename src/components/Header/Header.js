import React from 'react'

import * as S from './styles'
import { Nav, Width } from '../'
import { Heart } from 'components/Icons'

export default () =>
  <Width>
    <S.Header>
      <S.Wordmark>
        <Heart />
        <S.Name>
          Ryan Warner
        </S.Name>
      </S.Wordmark>
      <Nav />
    </S.Header>
  </Width>
