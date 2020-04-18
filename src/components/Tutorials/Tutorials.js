import React, { useState }  from 'react'

import * as S from './styles'
import { Article, Footer, Width, Filter } from 'components'

export default ({ data }) => {
  const { edges } = data.allMdx

  const articles = edges.map(item => ({
    id: item.node.id,
    title: item.node.frontmatter.title,
    excerpt: item.node.excerpt,
    tags: item.node.frontmatter.tags,
    slug: item.node.fields.slug
  }))

  const [filteredData, setFilteredData] = useState(articles)
  
  const handleFilter = (data) => {
    setFilteredData(data)
  }
  

  console.log('filteredData', filteredData)

  return (
    <>
      <Width>
        <S.TutorialsComponent>
          <S.Filters>
            <Filter data={articles} onChange={handleFilter} />
          </S.Filters>
          <S.Tutorials>
            <ul>
              {filteredData.map((article) =>
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
