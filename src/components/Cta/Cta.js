import React from 'react'

import * as S from './styles'

const discordInvite = 'https://discord.gg/Q5nPKtd'

export default () =>
  <S.Cta>
    <S.Title>What are you working on?</S.Title>
    <S.Description>
      Let’s have a conversation! I’d love to hear about what you’re working on and find a way to work together.
    </S.Description>
    <S.Button href={discordInvite} el='a'>
      Discord Chat
    </S.Button>
  </S.Cta>
