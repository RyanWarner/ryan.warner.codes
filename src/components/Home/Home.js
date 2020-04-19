import React from 'react'

import * as S from './styles'
import {
  Live,
  Footer,
  Hero,
  LatestArticles,
  ResourcesPreview,
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
          <ResourcesPreview />
        </div>
      </S.ContentWrap>
    </Width>
    <Footer disableBackground />
  </S.Home>
