import React from 'react'

import * as S from './styles'
import copy from './feedbackData'
import { FeedbackPricing } from 'components'

const Feedback = props => {
  return (
    <S.FeedbackComponent>
      <S.Header>
        <S.Title>
          {copy.title}
        </S.Title>
        <S.Description>
          {copy.description}
        </S.Description>
      </S.Header>
      <FeedbackPricing />
    </S.FeedbackComponent>
  )
}

export default Feedback
