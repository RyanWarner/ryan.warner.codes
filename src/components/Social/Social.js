import React from 'react'

import * as S from './styles'
import { social } from 'data'

export default () =>
  <S.Social>
    <S.StyledLink el='a' href={social.twitter} aria-label='Twitter'>
      <S.StyledTwitter />
    </S.StyledLink>
    <S.StyledLink el='a' href={social.github} aria-label='GitHub'>
      <S.StyledGitHub />
    </S.StyledLink>
    <S.StyledLink el='a' href={social.dribbble} aria-label='Dribbble'>
      <S.StyledDribbble />
    </S.StyledLink>
  </S.Social>
