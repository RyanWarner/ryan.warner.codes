import styled from 'styled-components'

import { Colors } from '../../styles'

export const Project = styled.div`
  position: relative;
  
  &:before {
    content: '';
    display: block;
    width: 4px;
    height: 100%;
    background-color: ${Colors.glow10};
    position: absolute;
  }
`

export const Title = styled.h4`
  
`

export const Description = styled.p`
  
`
export const StyledButton = styled.div`
`
