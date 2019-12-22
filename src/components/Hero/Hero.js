import React from 'react'

import * as S from './styles'

const meta = {
  twitter: 'https://twitter.com/RyanWarnerCodes',
  dribbble: 'https://dribbble.com/rywar',
  github: 'https://github.com/RyanWarner'
}

export default () =>
  <S.Hero>
    <S.H1>I'm Ryan, software engineer and interface designer.</S.H1>
    <S.SubHeader>
      I specialize in rapidly prototyping software companies and web applications.
      I talk about my journey on <S.Twitter href={meta.twitter} el='a'>Twitter</S.Twitter>,
      commit code to <S.GitHub href={meta.github} el='a'>Github</S.GitHub>,
      and take shots on <S.Dribbble href={meta.dribbble} el='a'>Dribbble</S.Dribbble>.
    </S.SubHeader>
  </S.Hero>
