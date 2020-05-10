import React from 'react'

import * as S from './styles'

const SecondaryButton = ({ children, ...rest }) =>
  <S.SecondaryButtonComponent
    type='button'
    {...rest}
    whileHover={{
      scale: 1.05,
      boxShadow: '0 3px 8px rgba(0, 0, 0, 0.4)',
      transition: { duration: 0.07 }
    }}
    whileTap={{
      scale: 0.95,
      transition: { duration: 0.05 }
    }}
  >
    {children}
  </S.SecondaryButtonComponent>

export default SecondaryButton
