import styled, { css } from 'styled-components'

import { Breakpoints, Colors, Type } from 'styles'
import Link from '../Link/Link'

export const Hero = styled.div`
  margin-top: 38px;
`

const maxWidth = '656px'

export const H1 = styled.h1`
  background: linear-gradient(${Colors.glow10}, ${Colors.glow20});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: ${maxWidth};
  margin: 0 0 32px 0;
  letter-spacing: 1px;
  color: ${Colors.glow20};

  &::selection {
    -webkit-background-clip: initial;
    -webkit-text-fill-color: initial;
  }

  @media(max-width: ${Breakpoints.mobile}) {
    margin: 0 0 20px 0;
  }
`

export const SubHeader = styled.p`
  font-size: 18px;
  font-weight: ${Type.fontWeights.medium};
  max-width: 600px;
  line-height: 180%;

  @media(max-width: ${Breakpoints.mobile}) {
    font-size: 16px;
    line-height: 180%;
  }
`

const underline = css`
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
