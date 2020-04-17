import React from 'react'

import * as S from './styles'
import {
  Live,
  Footer,
  Hero,
  LatestArticles,
  Resources,
  Width
} from '../../components'

export default () =>
  <S.Home>
    <Width>
      <Hero />
      <S.ContentWrap>
        <LatestArticles />
        <div style={{ width: '100%' }}>
          <Live />
          <Resources />
        </div>
      </S.ContentWrap>
    </Width>
    <Footer disableBackground />
  </S.Home>
