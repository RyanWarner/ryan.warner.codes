import React from 'react'

import * as S from './styles'
import { CapsTitle, SectionHeader, ResourceCard } from '../'

export default props =>
  <S.ResourcesComponent>
    <SectionHeader>
      <CapsTitle>Resources</CapsTitle>
    </SectionHeader>
    <S.Content>
      <ResourceCard />
    </S.Content>
  </S.ResourcesComponent>
