import React from 'react'

import { DiffViewer } from 'components'

const oldValue = `
plugins: [
]
`

const newValue = `
plugins: [
  {
    resolve: \`gatsby-source-filesystem\`,
    options: {
      name: \`content\`,
      path: \`\${__dirname}/src/content\`,
    }
  },
]
`

export default () =>
  <DiffViewer
    oldValue={oldValue}
    newValue={newValue}
    leftTitle='gatsby-config.js'
    showDiffOnly={false}
    splitView={false}
    hideLineNumbers
  />
