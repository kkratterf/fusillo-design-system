import React from 'react';
import tokens from '../../../design-tokens/export/tokens-light.js';
import TokenCard from './tokenCard.js';

interface TokenInfo {
  value: string;
}

function TokenCardList({ token }: { token: Record<string, TokenInfo> }) {
  return (
    <div className='token__grid'>
      {Object.entries(token).map(([tokenName, tokenInfo]) => (
        <TokenCard key={tokenName} name={tokenName} value={tokenInfo.value} />
      ))}
    </div>
  );
}

export function TokenCardListBackgroundBrand() {
  const backgroundBrand = tokens.Tokens.Light.Color.Background.Brand;
  return (
    <TokenCardList token={backgroundBrand} />
  );
}

export function TokenCardListBackgroundNeutral() {
  const backgroundNeutral = tokens.Tokens.Light.Color.Background.Neutral;
  return <TokenCardList token={backgroundNeutral} />;
}

export function TokenCardListBackgroundDanger() {
  const backgroundDanger = tokens.Tokens.Light.Color.Background.Danger;
  return <TokenCardList token={backgroundDanger} />;
}