// https://www.gatsbyjs.org/docs/mdx/programmatically-creating-pages/

const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
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
      value: `/articles${value}`
    })
  }
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page && page.path.match(/about/)) {
    page.context.layout = 'MdxPage'
    createPage(page)
  }
}

// https://www.gatsbyjs.org/docs/node-apis/#createPages
// Destructure the createPage function from the actions object
exports.createPages = async ({ page, graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx(filter: {fileAbsolutePath: {glob: "**/articles/**"}}) {
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

  // Create blog post pages.
  const articles = result.data.allMdx.edges

  articles.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve('./src/components/ArticleLayout/ArticleLayout.js'),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id }
    })
  })
}
