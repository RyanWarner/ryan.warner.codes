import styled, { css } from 'styled-components'

import { Buttons, Colors, Type } from 'styles'
import { GitHub, Twitter, Dribbble } from 'components/Icons'
import { Link } from 'components'

export const Social = styled.div`
  display: flex;
  align-items: center;
`

const icon = css`
  padding: 5px;

  path {
    transition: fill 300ms ease;
  }
`

export const StyledGitHub = styled(GitHub)`
  ${icon};

  &:hover path {
    fill: ${Colors.github};
  }
`

export const StyledTwitter = styled(Twitter)`
  ${icon};

  &:hover path {
    fill: ${Colors.twitter};
  }
`

export const StyledDribbble = styled(Dribbble)`
  ${icon};

  &:hover path {
    fill: ${Colors.dribbble};
  }
`

export const StyledLink = styled(Link)`
  margin-right: 19px;
  line-height: 0;
`
