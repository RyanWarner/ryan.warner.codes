import React from 'react'

import * as S from './styles'

export default function FeedbackTier({
  title,
  amount,
  features,
  cta,
  onCtaClick,
  hideCurrency,
  ...rest
}) {
  return (
    <S.FeedbackTierComponent {...rest}>
      <S.Title>{title}</S.Title>
      <S.Price>
        {!hideCurrency && <S.Dollar>$</S.Dollar>}
        <S.Amount>{amount}</S.Amount>
        {!hideCurrency && <S.Currency>USD</S.Currency>}
      </S.Price>
      <S.Features>
        {features.map((item, index) => (
          <S.StyledPricingFeature {...item} key={index} />
        ))}
      </S.Features>

      <S.Cta onClick={onCtaClick}>
        {cta}
      </S.Cta>

    </S.FeedbackTierComponent>
  )
}
