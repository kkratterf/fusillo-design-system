import React from 'react';

function ScaleCard({ name, value }) {
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
