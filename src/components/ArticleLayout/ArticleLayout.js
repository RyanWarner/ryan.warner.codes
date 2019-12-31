import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import * as S from './styles'
import { Width, Footer, Seo } from 'components'
import CodeBlock from './CodeBlock'

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock
}

export default function PageTemplate ({ data: { mdx } }) {
  return (
    <Width>
      <Seo title={mdx.frontmatter.title} />
      <S.Content>
        <S.Title>{mdx.frontmatter.title}</S.Title>
        <MDXProvider components={components}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </S.Content>
      <Footer />
    </Width>
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
