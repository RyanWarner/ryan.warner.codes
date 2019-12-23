import React from 'react'
import { Link } from 'gatsby'

export default ({ to, el, children, ...rest }) =>
  el === 'a'
    ? <a
        href={to}
        target='_blank'
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
