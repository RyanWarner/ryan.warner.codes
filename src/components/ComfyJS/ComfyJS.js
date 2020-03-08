import React, { useState } from 'react'
import ComfyJS from 'comfy.js'

import * as S from './styles'

const commands = {
  test: 'test',
  heart: 'heart',
  fireball: 'fireball'
}

ComfyJS.Init('RyanWarnerCodes')

export default props => {
  const [hearts, setHearts] = useState(1)

  ComfyJS.onCommand = (user, command, message, flags, extra) => {
    if (flags.broadcaster && command === commands.test) {
      console.log('!test was typed in chat')
    }

    if (command === commands.heart) {
      setHearts(hearts + 1)
    }

    if (command === commands.fireball) {
      setHearts(hearts)
    }
  }
  const newArray = Array(hearts).fill().map((x, i) => i)
  return (
    <S.ComfyJSComponent>
      {newArray.map((_, index) => <S.StyledHeart key={index} />)}
    </S.ComfyJSComponent>
  )
}
