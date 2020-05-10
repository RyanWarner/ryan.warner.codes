import React from 'react'
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer'
import Prism from 'prism-react-renderer/prism'

import * as S from './styles'
import './theme.css'
import diffViewerTheme from './diffViewerTheme'

const highlightSyntax = (str, language) => {
  const string = str || ''
  const lang = language || 'javascript'

  return (
    <pre
      style={{ display: 'inline' }}
      dangerouslySetInnerHTML={{
        __html: Prism.highlight(string, Prism.languages[lang])
      }}
    />
  )
}

export default (props) =>
  <S.DiffViewerComponent splitView={props.splitView === undefined}>
    <S.DiffViewerWrap>
      <ReactDiffViewer
        compareMethod={DiffMethod.LINES}
        splitView
        useDarkTheme
        renderContent={str => highlightSyntax(str, props.language)}
        styles={diffViewerTheme}
        {...props}
      />
    </S.DiffViewerWrap>
  </S.DiffViewerComponent>
