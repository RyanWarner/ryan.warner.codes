import React, { useEffect } from 'react'

import * as S from './styles'
import hearts from '../StreamStarting/hearts'

const StreamBrb = props => {
  useEffect(async () => {
    await hearts.initialize()
    hearts.start()
  }, [])

  return (
    <S.StreamBrbComponent />
  )
}

export default StreamBrb
