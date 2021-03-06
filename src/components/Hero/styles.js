import styled, { css } from 'styled-components'

import { Breakpoints, Colors, Type } from 'styles'
import Link from '../Link/Link'
import HeartEmitter from '../HeartEmitter/HeartEmitter'

export const Hero = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 100px 0 160px 0;
  overflow: hidden;

  @media(max-width: ${Breakpoints.mobile}) {
    flex-direction: column;
    padding-top: 0;
    padding-bottom: 100px;
    align-items: flex-start;
  }
`

const maxWidth = '756px'

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

  @media(max-width: ${Breakpoints.w1024}) {
    font-size: 3.72vw;
  }

  @media(max-width: ${Breakpoints.mobile}) {
    margin: 0 0 20px 0;
    font-size: 28px;
    max-width: 450px;
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
    max-width: 450px;
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

export const Copy = styled.div`
  padding-right: 300px;

  @media(max-width: ${Breakpoints.mobile}) {
    padding-right: 0;
  }
`

export const StyledHeartEmitter = styled(HeartEmitter)`
  position: absolute;
  right: -122px;

  @media(max-width: ${Breakpoints.mobile}) {
    position: relative;
    right: 0;
    margin-bottom: -40px;
    margin-top: -36px;
  }
`
