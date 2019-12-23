import React from 'react'

import * as S from './styles'
import { social } from 'data'

export default () =>
  <S.Social>
    <S.StyledLink el='a' href={social.twitter}>
      <S.StyledTwitter />
    </S.StyledLink>
    <S.StyledLink el='a' href={social.github}>
      <S.StyledGitHub />
    </S.StyledLink>
    <S.StyledLink el='a' href={social.dribbble}>
      <S.StyledDribbble />
    </S.StyledLink>
  </S.Social>
