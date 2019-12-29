const path = require('path')

const paths = require('./src/config/paths')
require('dotenv').config({
  path: `${paths.dotenv}.${process.env.DEPLOY_ENV || 'staging'}`
})

const amplitudeApiKey = process.env.AMPLITUDE_API_KEY
console.log('process.env.DEPLOY_ENV', process.env.DEPLOY_ENV)
console.log('amplitudeApiKey', amplitudeApiKey)
console.log('paths.dotenv', paths.dotenv)

module.exports = {
  siteMetadata: {
    title: 'Ryan Warner',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@ryanwarnercodes'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-layout',
    'gatsby-plugin-mdx',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-default-mdx-basic',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      }
    }, {
      resolve: `gatsby-plugin-amplitude-analytics`,
      options: {
        // Specify the API key for your Amplitude Project (required)
        apiKey: '4c24c0a86063468a5c71c19abfca0c39',
        // Puts tracking script in the head instead of the body (optional)
        head: false,
        // Prevents loading Amplitude and logging events if visitors have "Do Not Track" enabled (optional)
        // respectDNT: true,
        // Override the default event types (optional)
        eventTypes: {
          outboundLinkClick: 'outbound.link.click',
          pageView: 'page.view',
        },
        // Amplitude JS SDK configuration options (optional)
        amplitudeConfig: {
          saveEvents: true,
          includeUtm: true,
          includeReferrer: true
        }
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
}
