import styled from 'styled-components'

import { Breakpoints, Buttons, Colors } from 'styles'
import { Link } from 'components'

export const Project = styled.div`
  position: relative;
  background-color: ${Colors.blue20};
  border-radius: 6px;
  padding: 32px 38px;
  overflow: hidden;
  grid-column: span ${props => props.span};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media(max-width: ${Breakpoints.mobile}) {
    grid-column: 1;
    padding: 22px 28px;
  }
  
  &:before {
    content: '';
    display: block;
    width: 6px;
    height: 100%;
    background-color: ${props => props.color};
    position: absolute;
    left: 0;
    top: 0;
  }
`

export const Title = styled.h4`
  margin: 0 0 14px 0;
`

export const Description = styled.p`
  color: ${Colors.text20};
  font-size: 16px;
  margin-bottom: 35px;
`

export const Button = styled(Link)`
  ${Buttons.primary};
  margin-top: auto;
`
