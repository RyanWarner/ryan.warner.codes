import React from 'react'
import dayjs from 'dayjs'

import * as S from './styles'
import iconMap from './iconMap'

export default ({ article }) =>
  <S.TutorialSnippet to={article.fields.slug}>
    <S.Icon>
      {iconMap[article.frontmatter.icon || 'default']}
    </S.Icon>
    <S.Content>
      <S.Title>{article.frontmatter.title}</S.Title>
      <S.Meta>
        <S.Date datetime={article.frontmatter.date}>
          {dayjs.unix(article.frontmatter.date).format('MMM DD, YYYY')}
        </S.Date>
        <S.Emdot>•</S.Emdot>
        <S.ContentMeta>
          <S.Length>{article.timeToRead + 1} min read</S.Length>
        </S.ContentMeta>
        {article.frontmatter.videoLength && (
          <>
            <S.Emdot>•</S.Emdot>
            <S.ContentMeta>
              <S.Length>{article.frontmatter.videoLength} watch</S.Length>
            </S.ContentMeta>
          </>
        )}
      </S.Meta>
    </S.Content>
  </S.TutorialSnippet>
