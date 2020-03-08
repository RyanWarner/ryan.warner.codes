import React from 'react'

import * as S from './styles'

export default ({ icon, text, ...rest }) =>
  <S.IconCardComponent {...rest}>
    {icon}
    <S.Text>{text}</S.Text>
  </S.IconCardComponent>
