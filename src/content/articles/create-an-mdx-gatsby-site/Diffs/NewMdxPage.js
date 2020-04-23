import React from 'react'

import { DiffViewer } from 'components'

export default () =>
  <DiffViewer
    language='markdown'
    splitView={false}
    leftTitle='src/content/content-page.mdx'
    hideLineNumbers
    newValue={`
  ---
  title: My new content page
  ---

  # This is a header

    `}
  />
