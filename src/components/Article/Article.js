import React from 'react'

import * as S from './styles'

const iconMap = {
  video: <S.StyledYoutube />,
  article: <S.StyledFileText />
}

export default ({ title, slug, excerpt, type, description }) =>
  <S.ArticleComponent>
    <S.Icon>
      {iconMap[type] || iconMap.article}
    </S.Icon>
    <S.StyledLink to={slug}>
      <S.Title>{title}</S.Title>
      <S.Description>{description || excerpt}</S.Description>
    </S.StyledLink>
  </S.ArticleComponent>
