import React from 'react'

import * as S from './styles'
import nav from 'data/navItems'

export default () =>
  <S.Nav>
    {Object.values(nav).map(item => (
      <S.NavItem to={item.url} key={item.url}>
        {item.title}
      </S.NavItem>
    ))}
  </S.Nav>
