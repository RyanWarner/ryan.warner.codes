
import styled from 'styled-components'
import { Search } from 'react-feather'

import { Colors, Inputs } from 'styles'

export const FilterComponent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const TextField = styled.input`
  ${Inputs.filter};
  height: 37px;
  width: inherit;
`

export const SearchIcon = styled.div`
  width: 45px;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: -45px;
  z-index: 1;
  flex-shrink: 0;
`

export const StyledSearch = styled(Search)`
  width: 20px;
  height: 20px;

  circle, line {
    stroke: ${Colors.blue50};
  }
`
