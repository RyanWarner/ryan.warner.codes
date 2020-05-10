import React from 'react'

import * as S from './styles'
import Link from 'components/Link/Link'

export default function FeedbackSuccess(props) {
  return (
    <S.FeedbackSuccessComponent>
      <S.H1>You're awesome!</S.H1>

      <S.P>
        I'm so excited to help you take your project to the next level.
      </S.P>

      <S.P>
        I'll follow up with you in an email to discuss next steps.
      </S.P>

      <Link to='/'>
        <S.Button>
          Go back home
        </S.Button>
      </Link>
    </S.FeedbackSuccessComponent>
  )
}
