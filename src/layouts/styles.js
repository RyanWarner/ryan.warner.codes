import styled from 'styled-components'

import { ArticleWidth } from 'components'
import { Breakpoints, Colors, Sizes } from 'styles'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  z-index: 2;
  position: relative;
  padding-top: ${Sizes.navHeightMobile};

  @media(min-width: ${Breakpoints.mobile}) {
    padding-top: ${Sizes.navHeight};
  }
`

export const A = styled.a`
  text-decoration: underline;
  color: ${Colors.text20};
  text-decoration-color: ${Colors.blue60};
`

export const Li = styled.li`
  font-size: 16px;
  margin-bottom: 1rem;
  color: ${Colors.text20};

  @media (min-width: ${Breakpoints.mobile}) {
    font-size: 18px;
  }
`

export const P = styled.p`
  font-size: 16px;
  margin-bottom: 2rem;
  color: ${Colors.text20};

  @media (min-width: ${Breakpoints.mobile}) {
    font-size: 18px;
  }

  code {
    font-size: 15px;
    background-color: ${Colors.blue00};
    padding: 3px 6px;
    border-radius: 2px;
  }
`

export const Img = styled.img`
  max-width: 80%;
  margin: 4rem auto;
  display: block;
`

export const Pre = styled.pre`
  margin: 3rem 0;
`

export const H1 = styled.h1`
  color: ${Colors.text20};
`

export const H2 = styled.h2`
  margin: 3rem 0 1rem 0;

  @media (min-width: ${Breakpoints.mobile}) {
    margin: 6rem 0 2rem 0;
  }
`

export const H3 = styled.h3`
  margin-top: 3rem;

  @media (min-width: ${Breakpoints.mobile}) {
    margin-top: 6rem;
  }
`

export const StyledWidth = styled(ArticleWidth)`
  margin-bottom: 100px;
`

export const Hr = styled.hr`
  background-color: ${Colors.blue30};
  border: 0;
  height: 1px;
  margin: 60px 0;
`
