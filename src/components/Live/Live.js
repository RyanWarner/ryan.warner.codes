import React from 'react'

import * as S from './styles'
import { CapsTitle, SectionHeader } from '../'
import offline from 'images/offline.png'

const streamTitle = 'I livestream web design and development on Twitch. I\'m not live right now but you can view recordings of my past broadcasts.'

export default props =>
  <S.LiveComponent>
    <SectionHeader>
      <CapsTitle>Live</CapsTitle>
    </SectionHeader>
    <S.Stream>
      <S.Img src={offline} alt='Offline' />
      <S.StreamTitle>{streamTitle}</S.StreamTitle>
    </S.Stream>
  </S.LiveComponent>
