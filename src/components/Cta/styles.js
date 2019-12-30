import styled from 'styled-components'

import { Colors, Type } from 'styles'
import { Link } from 'components'

export const Cta = styled.div`
  width: 100vw;
  height: 430px;
  background-color: ${Colors.blue20};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: ${Colors.glow10};
`

export const Description = styled.p`
  text-align: center;
  font-size: 18px;
  max-width: 460px;
`

export const Button = styled(Link)`
  border-radius: 6px;
  background-color: ${Colors.glow20};
  padding: 8px 15px;
  color: ${Colors.blue10};
  font-weight: ${Type.fontWeights.bold};
  margin-top: 45px;
`
