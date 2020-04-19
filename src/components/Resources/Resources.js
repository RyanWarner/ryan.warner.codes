import React, { useState } from 'react'

import * as S from './styles'
import { ResourceCard, Footer, Width, Filter } from 'components'

export default ({ data }) => {
  const { edges } = data.allMdx

  const articles = edges.map(item => ({
    id: item.node.id,
    title: item.node.frontmatter.title,
    description: item.node.frontmatter.description,
    excerpt: item.node.excerpt,
    tags: item.node.frontmatter.tags,
    slug: item.node.fields.slug,
    type: item.node.frontmatter.type
  }))

  const [filteredData, setFilteredData] = useState(articles)

  const handleFilter = (data) => {
    setFilteredData(data)
  }

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
                  <ResourceCard {...article} />
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
