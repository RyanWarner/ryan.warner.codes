import React, { useState, useEffect } from 'react'
import ComfyJS from 'comfy.js'

import * as S from './styles'
import Fireball from './Fireball'

const commands = {
  test: 'test',
  heart: 'heart',
  fireball: 'fireball'
}

ComfyJS.Init('RyanWarnerCodes')

function getRandomInt(min, max) {
  return Math.random() * (max - min) + min
}

let lasers = []

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

window.setInterval(gameLoop, 33)

export default props => {
  const [hearts, setHearts] = useState(1)

  // useEffect(() => {
  //   function gameLoop() {
  //     for (var i = 0; i < lasers.length; i++) {
  //       var laser = lasers[i]
  //       if (laser.doMovement() === "delete") {
  //         lasers.splice(i, 1)
  //       }

  //       if (laser.doMovement() === "hit") {
  //         lasers.splice(i, 1)
  //       }
  //     }
  //   }

  //   window.setInterval(gameLoop, 1)
  // }, [])

  ComfyJS.onCommand = (user, command, message, flags, extra) => {
    if (flags.broadcaster && command === commands.test) {
      console.log('!test was typed in chat')
    }

    if (command === commands.heart) {
      setHearts(hearts + 1)
    }

    if (command === commands.fireball) {
      if (hearts > 1) setHearts(hearts - 1)
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
