import styled from 'styled-components'
import { Link } from 'gatsby'

import { Colors } from '../../styles'

export const Header = styled.header`
  padding: 65px 0;
  display: flex;
  justify-content: space-between;
`

export const Name = styled(Link)`
  font-weight: bold;
  font-size: 18px;
  color: ${Colors.text10};
`
