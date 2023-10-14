import React from 'react';

interface ScaleCardProps {
  name: string;
  value: string;
}

function ScaleCard({ name, value }: ScaleCardProps) {
  return (
    <div className="scale__card">
      <div className="scale__text">
        <p className="scale__title">Scale {name}</p>
        |
        <p className="scale__subtitle">{value}</p>
      </div>
      <div
        className="scale__swatch"
        style={{
          width: value,
        }}
      ></div>
    </div>
  );
}

export default ScaleCard;
