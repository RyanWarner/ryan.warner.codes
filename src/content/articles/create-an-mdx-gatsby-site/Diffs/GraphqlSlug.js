import React from 'react'

import { DiffViewer } from 'components'

const oldValue = `
export const pageQuery = graphql\`
  query ContentIndex {
    allMdx(
      filter: {
        fileAbsolutePath: {glob: "**/content/**"}
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
\`
`

const newValue = `
export const pageQuery = graphql\`
  query ContentIndex {
    allMdx(
      filter: {
        fileAbsolutePath: {glob: "**/content/**"}
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
\`
`

export default () =>
  <DiffViewer
    oldValue={oldValue}
    newValue={newValue}
    leftTitle='src/pages/content.js'
    showDiffOnly={false}
    splitView={false}
    hideLineNumbers
  />
