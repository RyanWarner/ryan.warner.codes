const paths = require('./src/config/paths')
require('dotenv').config({
  path: `${paths.dotenv}.${process.env.DEPLOY_ENV || 'local'}`
})

const amplitudeApiKey = process.env.AMPLITUDE_API_KEY

module.exports = {
  siteMetadata: {
    title: 'Ryan Warner',
    description:
      'Lead engineer and designer building software companies and web applications.',
    author: '@ryanwarnercodes',
    twitterUsername: '@ryanwarnercodes',
    siteUrl: 'https://ryan.warner.codes',
    image: '/images/ogImage.png',
    logo: '/images/logo.jpg'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-layout',
    'gatsby-plugin-mdx',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: `${__dirname}/src/content/articles`
      }
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: `${__dirname}/src/content/notes`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-default-mdx-basic',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png' // This path is relative to the root of the site.
      }
    }, {
      resolve: 'gatsby-plugin-amplitude-analytics',
      options: {
        // Specify the API key for your Amplitude Project (required)
        apiKey: amplitudeApiKey,
        // Puts tracking script in the head instead of the body (optional)
        head: false,
        eventTypes: {
          outboundLinkClick: 'outbound.link.click',
          pageView: 'page.view'
        },
        // Amplitude JS SDK configuration options (optional)
        amplitudeConfig: {
          saveEvents: true,
          includeUtm: true,
          includeReferrer: true
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
}
