import React from 'react'

import { DiffViewer } from 'components'

const oldValue = `
module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: '\${__dirname}/src/images',
      },
    },
`

const newValue = `
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'rw-gatsby-starter-prismic',
        schemas: {
          post: require('./src/schemas/post.json'),
        },
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: '\${__dirname}/src/images',
      },
    },
`

export default () =>
  <DiffViewer
    oldValue={oldValue}
    newValue={newValue}
    leftTitle='gatsby-config.js'
    showDiffOnly={false}
    splitView={false}
    hideLineNumbers
  />
