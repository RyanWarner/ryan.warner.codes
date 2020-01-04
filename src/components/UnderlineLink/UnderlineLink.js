import React from 'react'

import * as S from './styles'

export default ({ children, ...rest }) =>
  <S.UnderlineLinkComponent {...rest}>
    {children}
  </S.UnderlineLinkComponent>
