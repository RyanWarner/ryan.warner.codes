import React from 'react'

import * as S from './styles'

const Button = ({ children, ...rest }) =>
  <S.ButtonComponent
    {...rest}
    type='button'
    whileHover={{
      scale: 1.07,
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
      transition: { duration: 0.08 }
    }}
    whileTap={{
      scale: 0.95,
      transition: { duration: 0.05 }
    }}
  >
    {children}
  </S.ButtonComponent>

export default Button
