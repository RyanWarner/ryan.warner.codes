---
to: src/components/<%= name %>/<%= name %>.js
---
import React from 'react'

import * as S from './styles'

const <%= name %> = props =>
  <S.<%= name %>Component>
    <%= name %>
  </S.<%= name %>Component>

export default <%= name %>
