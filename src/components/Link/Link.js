import React from 'react'
import { Link } from 'gatsby'

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
