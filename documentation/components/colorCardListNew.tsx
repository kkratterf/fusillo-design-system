import React from 'react';
import colorData from '../../design-tokens/export/foundations.js';

interface ColorCardProps {
  name: string;
  value: string;
}

function ColorCardList() {
  const slateColors = colorData.Foundations.Color.Slate;
  const brandColors = colorData.Foundations.Color.Brand;

  return (
    <div className="color-card-list">
      {Object.entries(slateColors).map(([colorName, colorInfo]) => (
        <ColorCard key={colorName} name={colorName} value={colorInfo.value} />
      ))}
      {Object.entries(brandColors).map(([colorName, colorInfo]) => (
        <ColorCard key={colorName} name={colorName} value={colorInfo.value} />
      ))}
    </div>
  );
}

function ColorCard({ name, value }: ColorCardProps) {
  return (
    <div className="color-card">
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

export default ColorCardList;
