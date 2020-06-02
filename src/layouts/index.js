import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'

import { Header, Seo, Footer, BLM } from 'components'
import 'styles/FontFaces.css'
import * as S from './styles'
import { GlobalType } from 'styles/Type'
import { GlobalStyle } from 'styles/Global'
import { StateProvider } from '../components/store.js'
import components from 'components/mdxComponents'

const Blank = props => (
  <StateProvider>
    <GlobalStyle />
    <GlobalType />
    {props.children}
  </StateProvider>
)

const Default = props => (
  <>
    <Seo />
    <GlobalStyle />
    <GlobalType />
    <BLM />
    <S.Wrap>
      <MDXProvider components={components}>
        <Header location={props.location} />
        {props.children}
      </MDXProvider>
    </S.Wrap>
  </>
)

const MdxPage = props => {
  const { frontmatter } = props.pageContext

  return (
    <>
      <Seo
        image={frontmatter?.ogImage}
        title={frontmatter?.title}
        description={frontmatter?.description}
      />
      <GlobalStyle />
      <GlobalType />
      <S.Wrap>
        <MDXProvider components={components}>
          <Header location={props.location} />
          {props.children}
          <Footer />
        </MDXProvider>
      </S.Wrap>
    </>
  )
}

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
