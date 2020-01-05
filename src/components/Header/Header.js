import React from 'react'

import * as S from './styles'
import { Nav, Width } from '../'
import { Heart } from 'components/Icons'

export default ({ location }) =>
  <Width>
    <S.Header>
      <S.Wordmark to='/'>
        <Heart />
        <S.Name>
          Ryan Warner
        </S.Name>
      </S.Wordmark>
      <Nav location={location} />
    </S.Header>
  </Width>
