import React from 'react'

import * as S from './styles'
import { ArticleSnippet } from '../'

export default () =>
  <S.LatestArticles>
    <S.Header>
      <S.Title>Latest Articles</S.Title>
      <S.AllArticles>
        All articles
      </S.AllArticles>
    </S.Header>
    <ArticleSnippet />
    <ArticleSnippet />
    <ArticleSnippet />
  </S.LatestArticles>
