import React from 'react'

import { DiffViewer } from 'components'

const code = `
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = (args) => {
  const { node, actions, getNode } = args
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: 'slug',
      node,
      value
    })
  }
}
`

export default () =>
  <DiffViewer
    splitView={false}
    leftTitle='gatsby-node.js'
    hideLineNumbers
    newValue={code}
  />
