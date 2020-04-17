import React from 'react'

import * as S from './styles'
import { CapsTitle, SectionHeader } from '../'

const streamTitle = 'Web design in Figma & Gatsby'

export default props =>
  <S.LiveComponent>
    <SectionHeader>
      <CapsTitle>Live</CapsTitle>
    </SectionHeader>
    <S.Stream>
      <S.StreamTitle>{streamTitle}</S.StreamTitle>
    </S.Stream>
  </S.LiveComponent>
