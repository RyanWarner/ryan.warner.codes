import styled from 'styled-components'
import { Link } from 'gatsby'

import { Colors, Type } from '../../styles'

export const Nav = styled.nav``

export const NavItem = styled(Link)`
  padding: 10px;
  color: ${Colors.text10};
  font-size: 16px;
  font-weight: ${Type.medium};
`
