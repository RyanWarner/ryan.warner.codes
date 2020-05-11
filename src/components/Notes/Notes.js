import React from 'react'

import * as S from './styles'
import { Note, Footer, ArticleWidth } from 'components'

export default ({ data }) => {
  const { edges: articles } = data.allMdx

  return (
    <>
      <ArticleWidth>
        <S.ArticlesComponent>
          <S.Title>Notes</S.Title>
          <ul>
            {articles.map(({ node: note }) =>
              <S.Li key={note.id}>
                <Note {...note} />
              </S.Li>
            )}
          </ul>
        </S.ArticlesComponent>
      </ArticleWidth>
      <Footer />
    </>
  )
}
