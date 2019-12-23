import styled from 'styled-components'

import { Colors, Type } from 'styles'
import Link from '../Link/Link'

export const Hero = styled.div``

const maxWidth = '602px'

export const H1 = styled.h1`
  background: linear-gradient(${Colors.glow10}, ${Colors.glow20});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: ${maxWidth};
`

export const SubHeader = styled.p`
  font-size: 18px;
  font-weight: ${Type.fontWeights.medium};
  max-width: 600px;
  line-height: 180%;
`

const underline = `
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: background 300ms ease;
`

const link = `
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover {
    &:after {
      background-color: ${Colors.glow10};
    }
  }
`

export const Twitter = styled(Link)`
  ${link};
  color: ${Colors.twitter};

  &:after {
    ${underline};
    background-color: ${Colors.twitter};
  }
`

export const GitHub = styled(Link)`
  ${link};
  color: ${Colors.github};

  &:after {
    ${underline};
    background-color: ${Colors.github};
  }
`

export const Dribbble = styled(Link)`
  ${link};
  color: ${Colors.dribbble};

  &:after {
    ${underline};
    background-color: ${Colors.dribbble};
  }
`
