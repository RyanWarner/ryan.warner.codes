import React from 'react'

import * as S from './styles'

export default ({ children, ...rest }) =>
  <S.Width {...rest}>
    {children}
  </S.Width>
