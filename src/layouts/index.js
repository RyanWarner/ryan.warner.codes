import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/Header/Header'
import '../styles/FontFaces.css'
import * as S from './styles'
import { GlobalType } from '../styles/Type'
import { GlobalStyle } from '../styles/Global'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <GlobalType />
        <S.Wrap>
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
        </S.Wrap>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
