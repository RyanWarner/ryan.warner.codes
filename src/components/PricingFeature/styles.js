
import styled from 'styled-components'
import { Check } from 'react-feather'

import { Colors } from 'styles'

export const PricingFeatureComponent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`

export const StyledCheck = styled(Check)`
  margin-right: 10px;
  stroke: ${Colors.glow20};
`

export const Feature = styled.p`
  font-size: 17px;
`
