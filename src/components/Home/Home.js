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
        <S.RightCol>
          <Live />
          <ResourcesPreview />
        </S.RightCol>
      </S.ContentWrap>
    </Width>
    <Footer disableBackground />
  </S.Home>
