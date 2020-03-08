import React, { useState, useEffect, useRef } from 'react'
import ComfyJS from 'comfy.js'

import * as S from './styles'
import Fireball from './Fireball'

const commands = {
  test: 'test',
  heart: 'heart',
  heal: 'heal',
  fireball: 'fireball',
  hadouken: 'hadouken'
}

ComfyJS.Init('RyanWarnerCodes')

function getRandomInt(min, max) {
  return Math.random() * (max - min) + min
}

let lasers = []



const addNew = () => {
  const laser = new Fireball({
    x: 0,
    y: getRandomInt(0, 1080),
    angle: getRandomInt(-90, 90),
    velocity: getRandomInt(0, 8),
    index: 1
  })

  lasers.push(laser)
}



const startGame = () => {
  function gameLoop() {
    for (var i = 0; i < lasers.length; i++) {
      var laser = lasers[i]
      const doMovement = laser.doMovement()

      switch (doMovement) {
        case 'delete':
          lasers.splice(i, 1)
          break
        case 'hit':
          lasers.splice(i, 1)
          break
      }
    }
  }

  window.setInterval(gameLoop, 33)
}

startGame()

export default props => {
  const [hearts, setHearts] = useState(1)

  ComfyJS.onCommand = (user, command, message, flags, extra) => {
    if (flags.broadcaster && command === commands.test) {
      console.log('!test was typed in chat')
    }

    if (command === commands.heal) {
      setHearts(hearts + 1)
    }

    if (command === commands.fireball) {
      addNew()
    }
  }

  const newArray = Array(hearts).fill().map((x, i) => i)
  return (
    <S.ComfyJSComponent>
      {newArray.map((_, index) => <S.StyledHeart key={index} />)}
    </S.ComfyJSComponent>
  )
}
