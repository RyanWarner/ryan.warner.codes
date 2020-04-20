import React from 'react'

import * as S from './styles'
import { Link, Social } from 'components'

const gatsby = 'https://gatsbyjs.org'
const firebase = 'https://firebase.com'
const jost = 'https://indestructibletype.com/Jost.html'

export default props =>
  <S.Footer {...props}>
    <S.StyledWidth>
      <S.Credits>
        <p>Designed and developed by Ryan Warner.</p>
        <p>Built with <Link el='a' to={gatsby}>Gatsby</Link>. Hosted on <Link el='a' to={firebase}>Firebase</Link>. Type set in <Link el='a' to={jost}>Jost*</Link>.</p>
      </S.Credits>
      <Social />
    </S.StyledWidth>
  </S.Footer>
