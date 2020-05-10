// https://www.gatsbyjs.org/docs/mdx/programmatically-creating-pages/

const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')
const Dotenv = require('dotenv-webpack')

const paths = require('./src/config/paths')
const deployEnv = process.env.DEPLOY_ENV || 'local'

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      new Dotenv({
        path: `${paths.dotenv}.${deployEnv}`
      })
    ]
  })
}

exports.onCreateNode = (args) => {
  const { node, actions, getNode } = args
  const { createNodeField } = actions
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      // Name of the field you are adding
      name: 'slug',
      // Individual MDX node
      node,
      // Generated value based on filepath with 'articles' prefix. you
      // don't need a separating '/' before the value because
      // createFilePath returns a path with the leading '/'.
      value: `${value}`
    })
  }
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (!page) return

  // TODO: Clean this up
  if (page.path.match(/about/) || page.path.match(/mentorship/) || page.path.match(/uses/)) {
    page.context.layout = 'MdxPage'
    createPage(page)
  }

  if (page.path.match(/stream-starting/) || page.path.match(/stream-commands/)) {
    page.context.layout = 'Blank'
    createPage(page)
  }
}

const createPagesForMdxForDirectory = async ({ directory, graphql, reporter, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx(filter: {fileAbsolutePath: {glob: "**/${directory}/**"}}) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const mdx = result.data.allMdx.edges

  mdx.forEach(({ node }, index) => {
    createPage({
      path: `${node.fields.slug}`,
      // This component will wrap our MDX content
      component: path.resolve('./src/components/ArticleLayout/ArticleLayout.js'),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id }
    })
  })
}

// https://www.gatsbyjs.org/docs/node-apis/#createPages
// Destructure the createPage function from the actions object
exports.createPages = async args => {
  const mdxSourceDirectories = [
    'articles',
    'resources',
    'notes'
  ]

  const promises = mdxSourceDirectories.map(directory => {
    return createPagesForMdxForDirectory({ directory, ...args })
  })

  await Promise.all(promises)
}
