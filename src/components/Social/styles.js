import styled from 'styled-components'

import { Buttons, Colors, Type } from 'styles'
import { GitHub, Twitter, Dribbble } from 'components/Icons'
import { Link } from 'components'

export const Social = styled.div`
  display: flex;
`

export const StyledGitHub = styled(GitHub)`
  padding: 5px;

  &:hover path {
    fill: ${Colors.github};
  }
`

export const StyledTwitter = styled(Twitter)`
  padding: 5px;

  &:hover path {
    fill: ${Colors.twitter};
  }
`

export const StyledDribbble = styled(Dribbble)`
  padding: 5px;

  &:hover path {
    fill: ${Colors.dribbble};
  }
`

export const StyledLink = styled(Link)`
  margin-right: 19px;
`
