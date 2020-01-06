import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import { Breakpoints, Colors, Type } from '../../styles'

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
  position: relative;

  @media(max-width: ${Breakpoints.mobile}) {
    padding: 5px;
    font-size: 14px;
    margin-left: 8px;
  }
  
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: background 300ms ease;
  }

  ${props => props.selected && css`
    &:after {
      background-color: ${Colors.glow10};
    }
  `}
`
