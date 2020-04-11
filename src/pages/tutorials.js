import { graphql } from 'gatsby'

import { Tutorials } from 'components'

export const pageQuery = graphql`
  query TutorialsIndex {
    allMdx(
      filter: {fileAbsolutePath: {glob: "**/tutorials/**"}}
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
export default Tutorials
