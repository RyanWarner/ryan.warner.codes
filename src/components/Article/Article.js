import React from 'react'
import dayjs from 'dayjs'

import * as S from './styles'
import { ReadMore } from '../'

export default ({ fields, frontmatter, excerpt }) =>
  <S.ArticleComponent>
    <S.StyledLink to={`/articles${fields.slug}`}>
      <S.Date datetime={frontmatter.date}>
        {dayjs.unix(frontmatter.date).format('MMMM DD, YYYY')}
      </S.Date>
      <S.Title>{frontmatter.title}</S.Title>
      <S.Description>{excerpt}</S.Description>
      <ReadMore>Read more...</ReadMore>
    </S.StyledLink>
  </S.ArticleComponent>
