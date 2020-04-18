import React from 'react'

import * as S from './styles'

export default ({ fields, frontmatter, excerpt }) =>
  <S.ArticleComponent>
    <S.StyledLink to={`${fields.slug}`}>
      <S.Title>{frontmatter.title}</S.Title>
      <S.Description>{excerpt}</S.Description>
    </S.StyledLink>
  </S.ArticleComponent>
