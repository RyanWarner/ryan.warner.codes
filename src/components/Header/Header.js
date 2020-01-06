import React from 'react'

import * as S from './styles'
import { Nav, Width } from '../'

export default ({ location }) =>
  <Width>
    <S.Header>
      <S.Wordmark to='/'>
        <S.StyledHeart />
        <S.Name>
          Ryan Warner
        </S.Name>
      </S.Wordmark>
      <Nav location={location} />
    </S.Header>
  </Width>
