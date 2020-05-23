
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Breakpoints, Colors, Mixins, Type } from 'styles'

export const A = styled.a`
  text-decoration: underline;
  color: ${Colors.text20};
  text-decoration-color: ${Colors.blue60};
`

export const StyledLink = styled(Link)`
  color: ${Colors.text20};
`

export const Ul = styled.ul`
  ${Mixins.articleMaxWidth};

  padding-left: 130px;
`

export const Ol = styled.ol`
  ${Mixins.articleMaxWidth};

  padding-left: 130px;
`

export const P = styled.p`
  ${Mixins.articleMaxWidth};
  font-size: 16px;
  margin-bottom: 2rem;
  color: ${Colors.text20};

  @media (min-width: ${Breakpoints.mobile}) {
    font-size: 18px;
    line-height: 28px;
  }

  code {
    font-size: 15px;
    background-color: ${Colors.blue00};
    padding: 3px 6px;
    border-radius: 2px;
  }
`

export const Img = styled.img`
  max-width: 100%;
  display: block;
  box-shadow: none !important;
`

export const Pre = styled.pre`
  ${Mixins.articleMaxWidth};
  margin: 0 0 3rem 0;
`

export const Li = styled.li`
  font-size: 16px;
  margin-bottom: 1rem;
  color: ${Colors.text20};

  @media (min-width: ${Breakpoints.mobile}) {
    font-size: 18px;
  }

  p, ${Pre} {
    padding: 0;
  }
`

export const H1 = styled.h1`
  ${Mixins.articleMaxWidth};
  color: ${Colors.text20};
`

export const H2 = styled.h2`
  ${Mixins.articleMaxWidth};
  margin: 3rem 0 1rem 0;

  @media (min-width: ${Breakpoints.mobile}) {
    margin: 4rem 0 2rem 0;
  }
`

export const H3 = styled.h3`
  margin-top: 3rem;

  @media (min-width: ${Breakpoints.mobile}) {
    margin-top: 6rem;
  }
`

export const Hr = styled.hr`
  background-color: ${Colors.blue30};
  border: 0;
  height: 1px;
  margin: 60px 0;
`

export const Summary = styled.summary`
  ${Mixins.articleMaxWidth};
  margin-bottom: 20px;
  padding-top: 6px;
  padding-bottom: 6px;
  cursor: pointer;
  transition: all 200ms ease;
  font-weight: ${Type.fontWeights.medium};

  &:hover {
    color: ${Colors.glow20};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${Colors.glow20};
    border-radius: 4px;
  }

  &:focus:not(.focus-visible) {
    outline: none;
    box-shadow: none;
  }
`
