import React from 'react'

import * as S from './styles'

export default ({ feature }) =>
  <S.PricingFeatureComponent>
    <S.StyledCheck />
    <S.Feature>{feature}</S.Feature>
  </S.PricingFeatureComponent>
