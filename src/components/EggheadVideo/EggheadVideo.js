import React from 'react'

import * as S from './styles'

const EggheadVideo = ({ src, title }) =>
  <S.EggheadVideoComponent>
    <S.FrameWrap>
      <S.Frame src={src} title={title} />
    </S.FrameWrap>
  </S.EggheadVideoComponent>

export default EggheadVideo
