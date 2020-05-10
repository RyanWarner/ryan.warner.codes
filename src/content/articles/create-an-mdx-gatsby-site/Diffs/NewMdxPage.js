import React from 'react'

import { DiffViewer } from 'components'

const newValue = `
---
title: Post 1
---

This is a post.
`

export default () =>
  <DiffViewer
    language='markdown'
    splitView={false}
    leftTitle='src/content/post.mdx'
    hideLineNumbers
    newValue={newValue}
  />
