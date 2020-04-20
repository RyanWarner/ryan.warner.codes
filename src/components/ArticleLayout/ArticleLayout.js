import React from 'react'
import { graphql } from 'gatsby'
import dayjs from 'dayjs'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import * as S from './styles'
import { ArticleWidth, Footer, Seo } from 'components'

export default function PageTemplate ({ data: { mdx } }) {
  return (
    <>
      <ArticleWidth>
        <Seo
          title={mdx.frontmatter.title}
          description={mdx.frontmatter.description}
          image={mdx.frontmatter.ogImage}
        />
        <S.Content>
          <S.Title>{mdx.frontmatter.title}</S.Title>
          <S.Meta>
            <S.Image />
            <S.Text>
              <S.Author>Written by Ryan Warner</S.Author>
              <S.Date datetime={mdx.frontmatter.date}>
                {dayjs.unix(mdx.frontmatter.date).format('MMMM DD, YYYY')}
              </S.Date>
            </S.Text>
          </S.Meta>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </S.Content>
      </ArticleWidth>
      <Footer />
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
        date
        tags
        ogImage
      }
    }
  }
`
