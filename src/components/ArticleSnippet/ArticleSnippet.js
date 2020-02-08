import React from 'react'
import dayjs from 'dayjs'

import * as S from './styles'

const iconMap = {
  default: <S.StyledHeart />,
  react: <S.StyledReactLogo />,
  vscode: <S.StyledVSCode />
}

export default ({ article }) =>
  <S.ArticleSnippet to={`/articles${article.fields.slug}`}>
    <S.Icon>
      {iconMap[article.frontmatter.icon || 'default']}
    </S.Icon>
    <S.Content>
      <S.Title>{article.frontmatter.title}</S.Title>
      <S.Date datetime={article.frontmatter.date}>
        {dayjs.unix(article.frontmatter.date).format('MMMM DD, YYYY')}
      </S.Date>
    </S.Content>
  </S.ArticleSnippet>
