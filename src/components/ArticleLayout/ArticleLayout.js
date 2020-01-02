import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import * as S from './styles'
import { Width, Footer, Seo } from 'components'

export default function PageTemplate ({ data: { mdx } }) {
  return (
    <>
      <Width>
        <Seo title={mdx.frontmatter.title} />
        <S.Content>
          <S.Title>{mdx.frontmatter.title}</S.Title>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </S.Content>
      </Width>
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
        date
        tags
      }
    }
  }
`
