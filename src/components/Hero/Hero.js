import React from 'react'

import * as S from './styles'
import { social } from 'data'

export default () =>
  <S.Hero>
    <S.Copy>
      <S.H1>I'm Ryan, software engineer and interface designer.</S.H1>
      <S.SubHeader>
        I specialize in rapidly building software companies and web applications.
        I talk about my journey on <S.Twitter to={social.twitter} el='a'>Twitter</S.Twitter>,
        commit code to <S.GitHub to={social.github} el='a'>Github</S.GitHub>,
        and take shots on <S.Dribbble to={social.dribbble} el='a'>Dribbble</S.Dribbble>.
      </S.SubHeader>
    </S.Copy>
    <S.StyledHeartEmitter />
  </S.Hero>
