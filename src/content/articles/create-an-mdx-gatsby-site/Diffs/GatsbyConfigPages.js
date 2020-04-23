import React from 'react'

import { DiffViewer } from 'components'

const oldValue = `
module.exports = {
  plugins: [
    \`gatsby-plugin-mdx\`,
    \`gatsby-plugin-react-helmet\`,
    {
      resolve: \`gatsby-source-filesystem\`,
      options: {
        name: \`images\`,
        path: \`\${__dirname}/src/images\`,
      },
    },
`

const newValue = `
module.exports = {
  plugins: [
    {
      resolve: \`gatsby-plugin-page-creator\`,
      options: {
        path: \`\${__dirname}/src/content\`
      }
    },
    \`gatsby-plugin-mdx\`,
    \`gatsby-plugin-react-helmet\`,
    {
      resolve: \`gatsby-source-filesystem\`,
      options: {
        name: \`images\`,
        path: \`\${__dirname}/src/images\`,
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
