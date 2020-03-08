import React, { useState } from 'react'
import ComfyJS from 'comfy.js'

import * as S from './styles'

const commands = {
  test: 'test',
  heart: 'heart'
}

ComfyJS.Init('RyanWarnerCodes')

export default props => {
  const [hearts, setHearts] = useState(0)

  ComfyJS.onCommand = (user, command, message, flags, extra) => {
    if (flags.broadcaster && command === commands.test) {
      console.log('!test was typed in chat')
    }

    if (command === commands.heart) {
      setHearts(hearts + 1)
    }
  }


  return (
    <S.ComfyJSComponent>
      {hearts}
    </S.ComfyJSComponent>
  )
}
