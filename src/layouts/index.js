import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'

import { CodeBlock, Header, Seo, Footer } from 'components'
import 'styles/FontFaces.css'
import * as S from './styles'
import { GlobalType } from 'styles/Type'
import { GlobalStyle } from 'styles/Global'

const components = {
  p: S.P,
  img: S.Img,
  h1: S.H1,
  h2: S.H2,
  h3: S.H3,
  code: CodeBlock,
  a: props => <S.A {...props} />,
  li: props => <S.Li {...props} />,
  hr: S.Hr
}

const Blank = props => (
  <>
    <GlobalStyle />
    <GlobalType />
    {props.children}
  </>
)

const Default = props => (
  <>
    <Seo />
    <GlobalStyle />
    <GlobalType />
    <S.Wrap>
      <MDXProvider components={components}>
        <Header location={props.location} />
        {props.children}
      </MDXProvider>
    </S.Wrap>
  </>
)

const MdxPage = props => (
  <>
    <Seo />
    <GlobalStyle />
    <GlobalType />
    <S.Wrap>
      <MDXProvider components={components}>
        <Header location={props.location} />
        <S.StyledWidth>{props.children}</S.StyledWidth>
        <Footer />
      </MDXProvider>
    </S.Wrap>
  </>
)

const Layouts = {
  Blank,
  MdxPage
}

const Layout = props => {
  const Component = Layouts[props.pageContext.layout] || Default
  return <Component {...props} />
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
