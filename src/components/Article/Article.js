import React from 'react'
import dayjs from 'dayjs'

import * as S from './styles'
import { Link } from '../'

export default ({ fields, frontmatter, excerpt }) =>
  <S.ArticleComponent>
    <Link to={fields.slug}>
      <S.Date datetime={frontmatter.date}>
        {dayjs.unix(frontmatter.date).format('MMMM DD, YYYY')}
      </S.Date>
      <S.Title>{frontmatter.title}</S.Title>
      <S.Description>{excerpt}</S.Description>
      <S.ReadMore>Read more ...</S.ReadMore>
    </Link>
  </S.ArticleComponent>
