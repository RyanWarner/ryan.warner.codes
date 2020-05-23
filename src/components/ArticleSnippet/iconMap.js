import React from 'react'

import * as S from './iconStyles'
import screenflowIcon from 'images/ScreenFlow-Icon.png'

const iconMap = {
  default: <S.StyledHeart />,
  react: <S.StyledReactLogo />,
  vscode: <S.StyledVSCode />,
  gatsby: <S.StyledGatsby />,
  screenflow: <S.ScreenFlow src={screenflowIcon} alt='ScreenFlow Icon' />,
  twitch: <S.StyledTwitch />
}

export default iconMap
