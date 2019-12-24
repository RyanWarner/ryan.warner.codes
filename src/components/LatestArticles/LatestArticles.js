import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import * as S from './styles'
import { ArticleSnippet } from '../'

export default () => (
  <StaticQuery
    query={latestArticlesQuery}
    render={data => <LatestArticles data={data} />}
  />
)

const LatestArticles = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <S.LatestArticles>
      <S.Header>
        <S.Title>Latest Articles</S.Title>
        <S.AllArticles>
          All articles
        </S.AllArticles>
      </S.Header>
      {posts.map(item => {
        console.log('item', item.node.frontmatter)
        return <ArticleSnippet article={item.node} key={item.node.id} />
      })}
    </S.LatestArticles>
  )
}

export const latestArticlesQuery = graphql`
  query latestArticles {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
            icon
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
