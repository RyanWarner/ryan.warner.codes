import React from 'react'

import * as S from './styles'

export default ({ title, description, url, color, ...rest }) =>
  <S.Project color={color} {...rest}>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Button to={url} el='a'>View</S.Button>
  </S.Project>
