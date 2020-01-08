import React from 'react'

import * as S from './styles'
import { Note, Footer, Width } from 'components'

export default ({ data }) => {
  const { edges: articles } = data.allMdx

  return (
    <>
      <Width>
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
      </Width>
      <Footer />
    </>
  )
}
