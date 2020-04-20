import React from 'react'
import styled from 'styled-components'

import { HeartEmitter } from '../components'
import { Colors } from '../styles'

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.blue10};
`

export default () => (
  <Centered>
    <HeartEmitter />
  </Centered>
)
