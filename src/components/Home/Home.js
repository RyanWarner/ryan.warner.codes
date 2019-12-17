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
    <Header />
    <Hero />
    <LatestArticles />
    <Projects />
    <Cta />
    <Footer />
  </S.Home>
