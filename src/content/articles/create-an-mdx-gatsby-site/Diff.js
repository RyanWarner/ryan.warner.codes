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
import { Link } from 'gatsby'

export default ({ data }) => {
  const { edges } = data.allMdx

  return (
    <div>
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
    </div>
  )
}
`

export default () =>
  <DiffViewer
    oldValue={oldCode}
    newValue={newValue}
    leftTitle='src/components/content.js'
  />
