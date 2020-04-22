import React from 'react'
import styled from 'styled-components'
import ReactDiffViewer from 'react-diff-viewer'
import Prism from 'prism-react-renderer/prism'
import './theme.css'
import { Colors } from 'styles'

export const DiffWrap = styled.div`
  width: 70vw;
  margin-left: calc(-35vw + 350px);
`

const highlightSyntax = str => {
  console.log('Prism', Prism)
  const string = str || ''
  return (
    <pre
      style={{ display: 'inline' }}
      dangerouslySetInnerHTML={{
        __html: Prism.highlight(string, Prism.languages.javascript),
      }}
    />
  )
}

export const oldCode = `
  import React from 'react'
  import { graphql } from 'gatsby'

  export default ({ data }) => {
    const { edges } = data.allMdx

    return (
      <>
        <h1>Content</h1>
        <ul>
          {edges.map(item => (
            <li>{item.node.frontmatter.title}</li>
          ))}
        </ul>
      </>
    )
  }
`

export const newValue = `
  import React from 'react'
  import { Link } from 'gatsby'

  export default ({ data }) => {
    const { edges } = data.allMdx

    return (
      <div>
        <h1>Content</h1>
        <ul>
          {edges.map(item => (
            <li>
              <Link to={item.node.fields.slug}>
                {item.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
`

export default () =>
  <DiffWrap>
    <ReactDiffViewer
      oldValue={oldCode}
      newValue={newValue}
      splitView
      useDarkTheme
      renderContent={highlightSyntax}
      styles={
        {
          variables: {
            dark: {
              diffViewerBackground: Colors.blue10,
              gutterBackground: Colors.blue15
            }
          }
        }
      }
    />
  </DiffWrap>
