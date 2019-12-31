---
to: src/components/<%= name %>/<%= name %>.js
---
import React from 'react'

import * as S from './styles'

export default props =>
  <S.<%= name %>Component>
    <%= name %>
  </S.<%= name %>Component>
