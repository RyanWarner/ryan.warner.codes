import React from 'react'

import * as S from './styles'

const Button = ({ children, ...rest }) =>
  <S.ButtonComponent {...rest}>
    {children}
  </S.ButtonComponent>

export default Button
