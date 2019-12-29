import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { Header, Seo } from 'components'
import 'styles/FontFaces.css'
import * as S from './styles'
import { GlobalType } from 'styles/Type'
import { GlobalStyle } from 'styles/Global'

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <>
        <Seo title={data.site.siteMetadata.title} />
        <GlobalStyle />
        <GlobalType />
        <S.Wrap>
          <Header />
          {children}
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
  children: PropTypes.node.isRequired,
}

export default Layout
