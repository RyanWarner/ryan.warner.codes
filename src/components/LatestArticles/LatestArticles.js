import React from 'react'
import { graphql } from 'gatsby'

import * as S from './styles'
import { ArticleSnippet } from '../'

export default () =>
  <S.LatestArticles>
    <S.Header>
      <S.Title>Latest Articles</S.Title>
      <S.AllArticles>
        All articles
      </S.AllArticles>
    </S.Header>
    <ArticleSnippet />
    <ArticleSnippet />
    <ArticleSnippet />
  </S.LatestArticles>

// export const pageQuery = graphql`
//   query latestArticles {
//     allMdx {
//       edges {
//         node {
//           id
//           excerpt
//           frontmatter {
//             title
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `
