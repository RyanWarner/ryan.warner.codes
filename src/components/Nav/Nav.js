import React from 'react'

import * as S from './styles'
import nav from 'data/navItems'

export default ({ location }) =>
  <S.Nav>
    {Object.values(nav).map(item => (
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
