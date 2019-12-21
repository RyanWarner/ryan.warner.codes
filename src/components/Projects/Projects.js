import React from 'react'

import * as S from './styles'
import { Project } from '../'
import projects from 'data/projects'

export default () =>
  <S.Projects>
    Projects
    <S.ProjectGrid>
      {Object.values(projects).map(item =>
        <Project key={item.title} {...item} />
      )}
    </S.ProjectGrid>
  </S.Projects>
