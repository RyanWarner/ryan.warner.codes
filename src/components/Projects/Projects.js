import React from 'react'

import * as S from './styles'
import { Project } from '../'
import projects from 'data/projects'

export default () =>
  <S.Projects>
    <S.Title>Projects</S.Title>
    <S.ProjectGrid>
      {Object.values(projects).map(item =>
        <Project key={item.title} {...item} />
      )}
    </S.ProjectGrid>
  </S.Projects>
