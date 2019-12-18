import React from 'react'
import { Link } from 'gatsby'

import * as S from './styles'

export default ({ to, as, children }) =>
  as === 'a'
    ? <a
        href={to}
        target='blank'
        rel='noopener noreferrer'
      >
        {children}
      </a>
    : <Link to={to}>{children}</Link>
