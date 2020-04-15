import React from 'react'

import * as S from './styles'
import { secondaryNavItems } from 'data/navItems'

export default ({ location }) =>
  <S.Nav>
    {Object.values(secondaryNavItems).map(item => (
      <S.NavItem
        key={item.url}
        color={item.color}
        selected={item.url === location.pathname}
      >
        <S.NavLink
          to={item.url}
          color={item.color}
          selected={item.url === location.pathname}
        >
          {item.title}
        </S.NavLink>
      </S.NavItem>
    ))}
  </S.Nav>
