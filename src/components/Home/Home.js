import React from 'react'

import * as S from './styles'
import {
  Cta,
  Footer,
  Hero,
  LatestArticles,
  Projects
} from '../../components'

export default () =>
  <S.Home>
    <S.Container>
      <Hero />
      <LatestArticles />
      <Projects />
      <Cta />
      <Footer />
    </S.Container>
  </S.Home>
