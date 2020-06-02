import React from 'react'

import * as S from './styles'

const BLM = props =>
  <S.BLMComponent>
    <S.Header>
      Black Lives Matter
    </S.Header>
    <S.Description>
      I stand in solidarity with the Black community against racism and injustice.
    </S.Description>
    <S.Donate href='https://secure.actblue.com/donate/ms_blm_homepage_2019'>
      Donate
    </S.Donate>
  </S.BLMComponent>

export default BLM
