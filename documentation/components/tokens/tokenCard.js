import React from 'react';

function TokenCard({ name, value }) {
  return (
    <div className="token__card">
      <div
        className="token__swatch"
        style={{
          backgroundColor: value,
        }}
      ></div>
      <div className="token__text">
        <p className="token__title">{name}</p>
        <p className="token__subtitle">{value}</p>
      </div>
    </div>
  );
}

export default TokenCard;
