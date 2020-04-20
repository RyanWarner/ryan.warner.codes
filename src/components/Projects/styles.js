import styled from 'styled-components'

import { Breakpoints } from 'styles'

export const Projects = styled.div`
  margin-bottom: 134px;

  @media(max-width: ${Breakpoints.mobile}) {
    margin-bottom: 65px;
  }
`

export const Title = styled.h3`
  margin-bottom: 30px;
`

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media(max-width: ${Breakpoints.mobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
`
