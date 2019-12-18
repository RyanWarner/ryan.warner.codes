import React from 'react'

import * as S from './styles'
import { Link } from '../'

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
      I talk about my journey on <Link to={meta.twitter} as='a'>Twitter</Link>,
      commit code to <Link to={meta.github} as='a'>Github</Link>,
      and take shots on <Link to={meta.dribbble} as='a'>Dribbble</Link>.
    </S.SubHeader>
  </S.Hero>
