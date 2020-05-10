import React from 'react'

import * as S from './styles'

export default ({ url, ...rest }) =>
  <S.MaxWidth>
    <S.VideoComponent>
      <S.Player
        url={url}
        width='100%'
        height='100%'
      />
    </S.VideoComponent>
  </S.MaxWidth>
