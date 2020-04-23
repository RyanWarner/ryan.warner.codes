import React from 'react'

import { DiffViewer } from 'components'

const newValue = `
# Page 3

MDX is working!

\`\`\`
Some code
\`\`\`
`

export default () =>
  <DiffViewer
    language='markdown'
    splitView={false}
    leftTitle='src/pages/page-2.mdx'
    hideLineNumbers
    newValue={newValue}
  />
