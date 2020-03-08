import React, { useState, useEffect } from 'react'

import * as S from './styles'

const secondsToTime = (secs) => {
  const hours = Math.floor(secs / (60 * 60))

  const divisorForMinutes = secs % (60 * 60)
  const minutes = Math.floor(divisorForMinutes / 60)

  const divisorForSeconds = divisorForMinutes % 60
  let seconds = Math.ceil(divisorForSeconds)
  if (seconds === 0) seconds = '00'

  return {
    h: hours,
    m: minutes,
    s: seconds
  }
}

export default ({ seconds }) => {
  const [timeLeft, setTimeLeft] = useState(seconds || 300)

  useEffect(() => {
    if (!timeLeft) return

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeLeft])

  const time = secondsToTime(timeLeft)

  return (
    <S.TimerComponent>
      {time.m}:{time.s}
    </S.TimerComponent>
  )
}
