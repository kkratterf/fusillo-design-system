import React from 'react';
import colorData from '../../../design-tokens/export/tokens-light.js';

interface TokenCardProps {
  name: string;
  value: string;
}

function TokensCardList() {
  const brandColors = colorData.Tokens.Light.Color.Background.Brand;

  return (
    <div className="color-card-list">
      {Object.entries(brandColors).map(([colorName, colorInfo]) => (
        <TokenCard key={colorName} name={colorName} value={colorInfo.value} />
      ))}
    </div>
  );
}

function TokenCard({ name, value }: TokenCardProps) {
  return (
    <div className="nextra-card">
      <div
        className="color-swatch"
        style={{
          backgroundColor: value,
        }}
      ></div>
      <p>{name}</p>
      <p>{value}</p>
    </div>
  );
}

export default TokensCardList;
