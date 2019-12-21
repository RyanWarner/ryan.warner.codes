import React from 'react'

import * as S from './styles'

export default ({ title, description, url, color, ...rest }) =>
  <S.Project color={color} {...rest}>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.StyledButton to={url}>View</S.StyledButton>
  </S.Project>
