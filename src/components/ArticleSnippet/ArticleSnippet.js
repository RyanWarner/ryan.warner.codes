import React from 'react'

import * as S from './styles'

const iconMap = {
  default: <S.StyledHeart />,
  react: <S.StyledReactLogo />
}

export default ({ article }) =>
  <S.ArticleSnippet to={article.fields.slug}>
    <S.Icon>
      {iconMap[article.frontmatter.icon || 'default']}
    </S.Icon>
    <S.Content>
      <S.Title>{article.frontmatter.title}</S.Title>
      <S.Date datetime={article.frontmatter.date}>
        {article.frontmatter.date}
      </S.Date>
    </S.Content>
  </S.ArticleSnippet>
