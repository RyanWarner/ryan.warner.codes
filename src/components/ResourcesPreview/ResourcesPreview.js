import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import * as S from './styles'
import { CapsTitle, SectionHeader } from '../'

export default () => (
  <StaticQuery
    query={latestResourcesQuery}
    render={data => <ResourcesPreview data={data} />}
  />
)

const ResourcesPreview = ({ data }) => {
  const { edges } = data.allMdx

  const resources = edges.map(item => ({
    id: item.node.id,
    title: item.node.frontmatter.title,
    description: item.node.frontmatter.description,
    excerpt: item.node.excerpt,
    tags: item.node.frontmatter.tags,
    slug: item.node.fields.slug,
    type: item.node.frontmatter.type
  }))

  return (
    <S.ResourcesComponent>
      <SectionHeader>
        <CapsTitle>Resources</CapsTitle>
      </SectionHeader>
      {resources.map(item =>
        <S.StyledResourceCard {...item} key={item.id} />
      )}
    </S.ResourcesComponent>
  )
}

export const latestResourcesQuery = graphql`
  query ResourcesPreview {
    allMdx(
      filter: {fileAbsolutePath: {glob: "**/content/resources/**"}}
      limit: 2
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
            tags
            url
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
