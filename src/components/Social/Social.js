import React from 'react'

import * as S from './styles'

export default () =>
  <S.Social>
    <S.StyledLink el='a' href=''>
      <S.StyledTwitter />
    </S.StyledLink>
    <S.StyledLink el='a' href=''>
      <S.StyledGitHub />
    </S.StyledLink>
    <S.StyledLink el='a' href=''>
      <S.StyledDribbble />
    </S.StyledLink>
  </S.Social>
