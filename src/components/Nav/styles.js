import styled from 'styled-components'
import { Link } from 'gatsby'

import { Colors, Type } from '../../styles'

export const Nav = styled.nav`
  position: relative;
  right: -10px;
`

export const NavItem = styled(Link)`
  padding: 10px;
  color: ${Colors.text10};
  font-size: 16px;
  font-weight: ${Type.fontWeights.medium};
  margin-left: 10px;
  text-decoration: none;
`
