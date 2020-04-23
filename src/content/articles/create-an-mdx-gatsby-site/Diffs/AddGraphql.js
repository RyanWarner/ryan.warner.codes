import React from 'react'

import { DiffViewer } from 'components'

const oldValue = `
import React from 'react'

export default (props) => {
  return (
    <>
      <h1>Content</h1>
      <ul>
        <li>Content placeholder</li>
      </ul>
    </>
  )
}
`

const newValue = `
import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => {
  console.log('data', data)
  return (
    <>
      <h1>Content</h1>
      <ul>
        {edges.map(item => (
          <li>{item.node.frontmatter.title}</li>
        ))}
      </ul>
    </>
  )
}
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

export default () =>
  <DiffViewer
    oldValue={oldValue}
    newValue={newValue}
    leftTitle='src/pages/content.js'
    showDiffOnly={false}
  />
