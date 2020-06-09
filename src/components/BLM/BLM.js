import React from 'react'

import * as S from './styles'
import Width from '../Width/Width'

const BLM = props =>
  <S.BLMComponent>
    <Width>
      <S.Header>
        Black Lives Matter
      </S.Header>
      <S.Description>
        I stand in solidarity with the Black community against racism and injustice.
      </S.Description>
    </Width>
  </S.BLMComponent>

export default BLM
