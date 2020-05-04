import React from 'react'

import * as S from './styles'

const SecondaryButton = ({ children, ...rest }) =>
  <S.SecondaryButtonComponent {...rest}>
    {children}
  </S.SecondaryButtonComponent>

export default SecondaryButton
