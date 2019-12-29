import React from 'react'
import { Link, graphql } from 'gatsby'
import dayjs from 'dayjs'

import { Width } from 'components'

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <Width>
      <h1>Articles</h1>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p>
              {dayjs.unix(post.frontmatter.date).format('MMMM DD, YYYY')}
            </p>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </Width>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx(
      sort: {
        fields: [frontmatter___date]
        order: DESC
      }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
export default BlogIndex
