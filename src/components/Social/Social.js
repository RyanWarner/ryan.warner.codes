import React from 'react'

import * as S from './styles'
import { Link } from 'components'

export default () =>
  <S.Social>
    <Link el='a' href=''>
      <S.StyledTwitter />
    </Link>
    <Link el='a' href=''>
      <S.StyledGitHub />
    </Link>
    <Link el='a' href=''>
      <S.StyledDribbble />
    </Link>
  </S.Social>
