import React from 'react'

import { DiffViewer } from 'components'

const oldCode = `
import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const { edges } = data.allMdx

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
`

const newValue = `
import React from 'react'
import { graphql, Link } from 'gatsby'

export default ({ data }) => {
  const { edges } = data.allMdx

  return (
    <>
      <h1>Content</h1>
      <ul>
        {edges.map(item => (
          <li>
            <Link to={item.node.fields.slug}>
              {item.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
`

export default () =>
  <DiffViewer
    oldValue={oldCode}
    newValue={newValue}
    leftTitle='src/components/content.js'
    showDiffOnly={false}
  />
