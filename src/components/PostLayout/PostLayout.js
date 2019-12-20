import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from "@mdx-js/react"

import { Width } from 'components'

const components = {
  h1: props => <h1 {...props} />
}

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Width>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXProvider components={components}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
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
      }
    }
  }
`
