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
    </Width>
    <Cta />
    <Width>
      <Footer />
    </Width>
  </S.Home>
