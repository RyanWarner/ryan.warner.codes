import React from 'react'

import * as S from './styles'
import nav from 'data/navItems'

export default ({ location }) =>
  <S.Nav>
    {Object.values(nav).map(item => (
      <S.NavItem
        to={item.url}
        key={item.url}
        selected={item.url === location.pathname}
      >
        {item.title}
      </S.NavItem>
    ))}
  </S.Nav>
