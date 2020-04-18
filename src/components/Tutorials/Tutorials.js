import React from 'react'

import * as S from './styles'
import { Article, Footer, Width, Filter } from 'components'

export default ({ data }) => {
  const { edges: articles } = data.allMdx

  console.log('articles', articles)

  return (
    <>
      <Width>
        <S.TutorialsComponent>
          <S.Filters>
            <Filter />
          </S.Filters>
          <S.Tutorials>
            <ul>
              {articles.map(({ node: article }) =>
                <li key={article.id}>
                  <Article {...article} />
                </li>
              )}
            </ul>
          </S.Tutorials>
        </S.TutorialsComponent>
      </Width>
      <Footer />
    </>
  )
}
