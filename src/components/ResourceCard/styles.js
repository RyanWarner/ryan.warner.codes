
import styled from 'styled-components'

import { Colors, Mixins } from 'styles'
import { Link } from 'components'

export const ResourceCardComponent = styled(Link)`
  ${Mixins.outlineContainer};
  overflow: hidden;
  background-color: ${Colors.blue10};
  cursor: pointer;
  display: block;
`

export const Img = styled.img`
  width: 100%;
`

export const Meta = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;

  p {
    color: ${Colors.text10};
  }
`
