import React, { useEffect } from 'react'

import * as S from './styles'
import hearts from '../StreamStarting/hearts'

const StreamEnding = props => {
  useEffect(async () => {
    await hearts.initialize()
    hearts.start()
  }, [])

  return (
    <S.StreamBrbComponent>
      <S.Title>Stream ending</S.Title>
      @RyanWarnerCodes
    </S.StreamBrbComponent>
  )
}

export default StreamEnding
