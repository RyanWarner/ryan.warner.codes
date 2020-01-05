import React from 'react'
import dayjs from 'dayjs'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import * as S from './styles'

const components = {
  p: props => <S.P {...props} />,
  li: props => <S.Li {...props} />
}

export default ({ fields, frontmatter, excerpt, body }) =>
  <S.ArticleComponent>
    <S.Date datetime={frontmatter.date}>
      {dayjs.unix(frontmatter.date).format('MMMM DD, YYYY')}
    </S.Date>
    <S.Title>{frontmatter.title}</S.Title>
    <S.Description>
      <MDXProvider components={components}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </S.Description>
  </S.ArticleComponent>
