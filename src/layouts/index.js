import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'

import { CodeBlock, Header, Seo, Footer } from 'components'
import 'styles/FontFaces.css'
import * as S from './styles'
import { GlobalType } from 'styles/Type'
import { GlobalStyle } from 'styles/Global'

const components = {
  p: S.P,
  img: S.Img,
  h2: S.H2,
  code: CodeBlock
}

const Content = ({ children, pageContext }) => {
  if (pageContext.layout === 'MdxPage') {
    return (
      <>
        <S.StyledWidth>
          {children}
        </S.StyledWidth>
        <Footer />
      </>
    )
  }
  return children
}

const Layout = props => (
  <StaticQuery
    query={query}
    render={data => (
      <>
        <Seo title={data.site.siteMetadata.title} />
        <GlobalStyle />
        <GlobalType />
        <S.Wrap>
          <MDXProvider components={components}>
            <Header />
            <Content {...props} />
          </MDXProvider>
        </S.Wrap>
      </>
    )}
  />
)

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
