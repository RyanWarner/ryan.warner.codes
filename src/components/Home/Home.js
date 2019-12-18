import React from 'react'

import * as S from './styles'
import {
  Cta,
  Footer,
  Header,
  Hero,
  LatestArticles,
  Projects
} from '../../components'

export default () =>
  <S.Home>
    <S.Container>
      <Header />
      <Hero />
      <LatestArticles />
      <Projects />
      <Cta />
      <Footer />
    </S.Container>
  </S.Home>
