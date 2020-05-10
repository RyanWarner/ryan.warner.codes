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
  sku,
  disabled,
  ...rest
}) {
  return (
    <S.FeedbackTierComponent large={large} {...rest}>
      <S.Title>{title}</S.Title>
      <S.Price>
        {!hideCurrency && <S.Dollar>$</S.Dollar>}
        <S.Amount large={large}>
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
          <S.Cta onClick={() => onCtaClick(sku)}>
            {cta}
          </S.Cta>
        )
        : (
          <S.SecondaryCta onClick={() => onCtaClick(sku)}>
            {cta}
          </S.SecondaryCta>
        )}
    </S.FeedbackTierComponent>
  )
}
