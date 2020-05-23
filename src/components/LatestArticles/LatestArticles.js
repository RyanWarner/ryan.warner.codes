import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import * as S from './styles'
import { TutorialSnippet, CapsTitle } from '../'
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
        <CapsTitle>Latest Tutorials</CapsTitle>
        <S.All to='/tutorials'>
          View all
          <S.Chevrons color={Colors.blue50} />
        </S.All>
      </S.Header>
      <S.Articles>
        {articles.map(item =>
          <TutorialSnippet article={item.node} key={item.node.id} />
        )}
      </S.Articles>
    </S.LatestArticles>
  )
}

export const latestArticlesQuery = graphql`
  query latestArticles {
    allMdx(
      filter: {fileAbsolutePath: {glob: "**/articles/**"}}
      limit: 7
      sort: {
        fields: [frontmatter___date]
        order: DESC
      }
    ) {
      edges {
        node {
          id
          excerpt
          timeToRead
          frontmatter {
            title
            date
            icon
            videoLength
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
