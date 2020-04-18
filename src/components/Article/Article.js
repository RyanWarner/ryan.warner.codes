import React from 'react'

import * as S from './styles'

export default ({ title, slug, excerpt }) =>
  <S.ArticleComponent>
    <S.StyledLink to={slug}>
      <S.Title>{title}</S.Title>
      <S.Description>{excerpt}</S.Description>
    </S.StyledLink>
  </S.ArticleComponent>
