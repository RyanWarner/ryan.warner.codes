import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import oceanicNext from 'prism-react-renderer/themes/oceanicNext'

import * as S from './styles'
import theme from './theme'

const customTheme = {
  plain: theme.plain,
  styles: [
    ...oceanicNext.styles,
    ...theme.styles
  ]
}

export default ({ children, className }) => {
  const language = className ? className.replace(/language-/, '') : 'js'

  return (
    <Highlight {...defaultProps} code={children} language={language} theme={customTheme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <S.Pre className={className} style={{ ...style }}>
          <S.Code>
            {tokens.map((line, i) => {
              if (i === tokens.length - 1 && line[0].empty) return null
              return (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              )
            })}
          </S.Code>
        </S.Pre>
      )}
    </Highlight>
  )
}
