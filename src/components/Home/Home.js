import React from 'react'

import * as S from './styles'
import {
  Cta,
  Footer,
  Hero,
  LatestArticles,
  Projects,
  Width
} from '../../components'

export default () =>
  <S.Home>
    <Width>
      <Hero />
      <LatestArticles />
      <Projects />
      <Cta />
      <Footer />
    </Width>
  </S.Home>
