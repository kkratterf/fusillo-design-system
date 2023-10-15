import React from 'react';

function TokenCard({ name, value, origin, description }) {

  const matches = origin.match(/(\w+-\d+)\}$/);
  const cleanedOrigin = matches ? matches[1] : origin;

  return (
    <div className="token__card">
      <div
        className="token__swatch"
        style={{
          backgroundColor: value,
        }}
      ></div>
      <div className="token__text">
        <p className="token__title">--color-{name}</p>
        <p className="token__subtitle">--color-{cleanedOrigin}</p>
        <p className="token__subtitle">{description}</p>
      </div>
    </div>
  );
}

export default TokenCard;
