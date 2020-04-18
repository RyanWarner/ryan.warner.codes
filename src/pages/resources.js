import { graphql } from 'gatsby'

import { Resources } from 'components'

export const pageQuery = graphql`
  query ResourcesIndex {
    allMdx(
      filter: {fileAbsolutePath: {glob: "**/content/resources/**"}}
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
            # url
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
