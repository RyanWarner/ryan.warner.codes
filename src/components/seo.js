import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ description, lang, meta, keywords, title, siteUrl, image }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const { siteUrl } = data.site.siteMetadata
        const metaDescription =
          description || data.site.siteMetadata.description

        const metaTitle = title || data.site.siteMetadata.title

        const ogImage = image
          ? `/images/ogImages/${image}`
          : data.site.siteMetadata.image

        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={metaTitle}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[{
              name: 'description',
              content: metaDescription
            }, {
              property: 'og:title',
              content: metaTitle
            }, {
              property: 'og:image',
              content: `${siteUrl}${ogImage}`
            }, {
              property: 'og:image:alt',
              content: "Ryan Warner's digital garden, tutorials, and resources."
            }, {
              property: 'og:logo',
              content: data.site.siteMetadata.logo
            }, {
              property: 'og:description',
              content: metaDescription
            }, {
              property: 'og:type',
              content: 'website'
            }, {
              name: 'twitter:card',
              content: 'summary_large_image'
            }, {
              name: 'twitter:creator',
              content: data.site.siteMetadata.author
            }, {
              name: 'twitter:title',
              content: title
            }, {
              name: 'twitter:image',
              content: `${siteUrl}${ogImage}`
            }, {
              name: 'twitter:description',
              content: metaDescription
            }]
              .concat(
                keywords.length > 0
                  ? {
                    name: 'keywords',
                    content: keywords.join(', ')
                  }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: []
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
        twitterImage
        logo
        siteUrl
      }
    }
  }
`
