import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import { Breakpoints, Colors, Type, Sizes } from '../../styles'

export const Nav = styled.nav`
  position: relative;
  display: flex;
  right: -10px;
`

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  height: ${Sizes.navHeight};
  position: relative;
  margin-left: 10px;

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
      background-color: ${props => props.color || Colors.glow10};
    }
  `}
`

export const NavLink = styled(Link)`
  padding: 10px;
  color: ${Colors.text10};
  font-size: 16px;
  font-weight: ${Type.fontWeights.medium};
  text-decoration: none;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  @media(max-width: ${Breakpoints.mobile}) {
    padding: 5px;
    font-size: 14px;
    margin-left: 8px;
  }

  &:hover {
    color: ${props => props.color || Colors.text10};
  }

  ${props => props.selected && css`
    color: ${props => props.color || Colors.text10};
  `}

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.color || Colors.glow20};
    color: ${props => props.color || Colors.text10};
    border-radius: 4px;
  }

  &:focus:not(.focus-visible) {
    outline: none;
    box-shadow: none;
  }
`
