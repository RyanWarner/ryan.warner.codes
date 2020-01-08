import { graphql } from 'gatsby'

import { Notes } from 'components'

export const pageQuery = graphql`
  query NotesIndex {
    allMdx(
      filter: {fileAbsolutePath: {glob: "**/notes/**"}}
      sort: {
        fields: [frontmatter___date]
        order: DESC
      }
    ) {
      edges {
        node {
          id
          excerpt
          body
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
export default Notes
