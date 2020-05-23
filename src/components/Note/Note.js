import React from 'react'
import dayjs from 'dayjs'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import * as S from './styles'
import { ReadMore } from '../'

const components = {
  p: props => <S.P {...props} />,
  li: props => <S.Li {...props} />
}

export default ({ fields, frontmatter, excerpt, body }) =>
  <S.NoteComponent>
    <S.Date datetime={frontmatter.date}>
      {dayjs.unix(frontmatter.date).format('MMMM DD, YYYY')}
    </S.Date>
    <S.StyledLink to={fields.slug}>
      <S.Title>{frontmatter.title}</S.Title>
    </S.StyledLink>
    <S.Description>
      {frontmatter.description
        ? frontmatter.description
        : (
          <MDXProvider components={components}>
            <MDXRenderer>
              {body}
            </MDXRenderer>
          </MDXProvider>
        )}
    </S.Description>
    {frontmatter.description &&
      <S.StyledLink to={`${fields.slug}`}>
        <ReadMore>Read more...</ReadMore>
      </S.StyledLink>}
  </S.NoteComponent>
