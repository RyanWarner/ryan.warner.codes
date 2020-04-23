import React from 'react'

import { DiffViewer } from 'components'

const newvalue = `
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

export default () =>
  <DiffViewer
    splitView={false}
    leftTitle='src/pages/content.js'
    hideLineNumbers
    newValue={newvalue}
  />
