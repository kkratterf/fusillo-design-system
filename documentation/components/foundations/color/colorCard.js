import React from 'react';

function ColorCard({ name, value }) {
  return (
    <div className="color__card">
      <div
        className="color__swatch"
        style={{
          backgroundColor: value,
        }}
      ></div>
      <div className="color__text">
        <p className="color__title">--color-{name}</p>
        <p className="color__subtitle">{value}</p>
      </div>
    </div>
  );
}

export default ColorCard;
