import styled from 'styled-components'

import { Breakpoints, Colors, Type } from 'styles'
import { Link } from 'components'

export const Cta = styled.div`
  width: 100vw;
  height: 430px;
  background-color: ${Colors.blue20};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;

  @media(max-width: ${Breakpoints.mobile}) {
    height: auto;
    padding: 55px 20px;
  }
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 0;
  color: ${Colors.glow10};
`

export const Description = styled.p`
  text-align: center;
  font-size: 18px;
  max-width: 100vw;

  @media(min-width: ${Breakpoints.mobile}) {
    max-width: 460px;
  }
`

export const Button = styled(Link)`
  border-radius: 6px;
  background-color: ${Colors.glow20};
  padding: 8px 15px;
  color: ${Colors.blue10};
  font-weight: ${Type.fontWeights.bold};
  margin-top: 45px;
  transition: all 200ms ease;

  &:hover {
    color: ${Colors.blue10};
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.6);
  }
`
