import React from 'react';

function SpaceCard({ name, value }) {
  return (
    <div className="space__card">
      <div className="space__text">
        <p className="space__title">--space-{name}</p>
        |
        <p className="space__subtitle">{value}</p>
      </div>
      <div
        className="space__swatch"
        style={{
          width: value,
        }}
      ></div>
    </div>
  );
}

export default SpaceCard;
