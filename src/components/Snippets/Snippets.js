import React from 'react'

import * as S from './styles'
import { Snippet, Footer, Width } from 'components'

export default ({ data }) => {
  const { edges: articles } = data.allMdx

  return (
    <>
      <Width>
        <S.ArticlesComponent>
          <S.Title>Snippets</S.Title>
          <ul>
            {articles.map(({ node: snippet }) =>
              <S.Li key={snippet.id}>
                <Snippet {...snippet} />
              </S.Li>
            )}
          </ul>
        </S.ArticlesComponent>
      </Width>
      <Footer />
    </>
  )
}
