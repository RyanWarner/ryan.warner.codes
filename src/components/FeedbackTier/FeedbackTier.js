import React from 'react'

import * as S from './styles'

export default function FeedbackTier({
  title,
  amount,
  features,
  cta,
  onCtaClick,
  hideCurrency,
  large,
  ...rest
}) {
  return (
    <S.FeedbackTierComponent large={large} {...rest}>
      <S.Title>{title}</S.Title>
      <S.Price>
        {!hideCurrency && <S.Dollar>$</S.Dollar>}
        <S.Amount hideCurrency={hideCurrency}>
          {amount}
        </S.Amount>
        {!hideCurrency && <S.Currency>USD</S.Currency>}
      </S.Price>
      <S.Features>
        {features.map((item, index) => (
          <S.StyledPricingFeature feature={item} key={index} />
        ))}
      </S.Features>

      {large
        ? (
          <S.Cta onClick={onCtaClick}>
            {cta}
          </S.Cta>
        )
        : (
          <S.SecondaryCta onClick={onCtaClick}>
            {cta}
          </S.SecondaryCta>
        )
      }

    </S.FeedbackTierComponent>
  )
}
