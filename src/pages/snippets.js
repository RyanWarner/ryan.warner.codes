import { graphql } from 'gatsby'

import { Articles } from 'components'

export const pageQuery = graphql`
  query SnippetsIndex {
    allMdx(
      filter: {fileAbsolutePath: {glob: "**/snippets/**"}}
      sort: {
        fields: [frontmatter___date]
        order: DESC
      }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
export default Articles
