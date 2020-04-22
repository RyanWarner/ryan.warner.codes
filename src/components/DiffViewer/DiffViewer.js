import React from 'react'
import ReactDiffViewer from 'react-diff-viewer'
import Prism from 'prism-react-renderer/prism'

import * as S from './styles'
import './theme.css'
import diffViewerTheme from './diffViewerTheme'

const highlightSyntax = str => {
  const string = str || ''
  return (
    <pre
      style={{ display: 'inline' }}
      dangerouslySetInnerHTML={{
        __html: Prism.highlight(string, Prism.languages.javascript)
      }}
    />
  )
}

export default (props) =>
  <S.DiffViewerComponent>
    <S.DiffViewerWrap>
      <ReactDiffViewer
        splitView
        useDarkTheme
        renderContent={highlightSyntax}
        styles={diffViewerTheme}
        {...props}
      />
    </S.DiffViewerWrap>
  </S.DiffViewerComponent>
