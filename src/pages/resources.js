import { graphql } from 'gatsby'

import { Resources } from 'components'

export const pageQuery = graphql`
  query ResourcesIndex {
    allMdx(
      filter: {fileAbsolutePath: {glob: "**/resources/**"}}
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
export default Resources
