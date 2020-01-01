import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import * as S from './styles'
import { ArticleSnippet } from '../'
import { Colors } from 'styles'

export default () => (
  <StaticQuery
    query={latestArticlesQuery}
    render={data => <LatestArticles data={data} />}
  />
)

const LatestArticles = ({ data }) => {
  const { edges: articles } = data.allMdx
  return (
    <S.LatestArticles>
      <S.Header>
        <S.Title>Latest Articles</S.Title>
        <S.AllArticles to='/articles'>
          All articles
          <S.Chevrons color={Colors.blue50} />
        </S.AllArticles>
      </S.Header>
      {articles.map(item =>
        <ArticleSnippet article={item.node} key={item.node.id} />
      )}
    </S.LatestArticles>
  )
}

export const latestArticlesQuery = graphql`
  query latestArticles {
    allMdx(
      filter: {fileAbsolutePath: {glob: "**/articles/**"}}
      limit: 3
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
