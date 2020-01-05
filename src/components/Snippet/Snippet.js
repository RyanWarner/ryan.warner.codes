import React from 'react'
import dayjs from 'dayjs'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import * as S from './styles'
import { Link } from '../'

export default ({ fields, frontmatter, excerpt, body }) =>
  <S.ArticleComponent>
    <Link to={fields.slug}>
      <S.Date datetime={frontmatter.date}>
        {dayjs.unix(frontmatter.date).format('MMMM DD, YYYY')}
      </S.Date>
      <S.Title>{frontmatter.title}</S.Title>
      <S.Description>
        <MDXRenderer>{body}</MDXRenderer>
      </S.Description>
    </Link>
  </S.ArticleComponent>
