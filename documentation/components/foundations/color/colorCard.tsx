import React from 'react';

interface ColorCardProps {
  name: string;
  value: string;
}

function ColorCard({ name, value }: ColorCardProps) {
  return (
    <div className="color__card">
      <div
        className="color__swatch"
        style={{
          backgroundColor: value,
        }}
      ></div>
      <div className="color__text">
        <p className="color__title">{name}</p>
        <p className="color__subtitle">{value}</p>
      </div>
    </div>
  );
}

export default ColorCard;
