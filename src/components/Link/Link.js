import React from 'react'
import { Link } from 'gatsby'

export default ({ to, as, children, ...rest }) =>
  as === 'a'
    ? <a
        href={to}
        target='blank'
        rel='noopener noreferrer'
        {...rest}
      >
        {children}
      </a>
    : <Link
        to={to}
        {...rest}
      >
        {children}
      </Link>
