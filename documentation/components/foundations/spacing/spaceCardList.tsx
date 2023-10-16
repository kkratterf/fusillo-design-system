import React from 'react';
import scale from '../../../../design-tokens/export/foundations.js';
import SpaceCard from './spaceCard.js';

function SpaceCardList() {
  const scales = scale.Foundations.Scale;
  return (
    <div className='scale__grid'>
      {Object.entries(scales).map(([scaleName, scaleInfo]) => (
        <SpaceCard key={scaleName} name={scaleName} value={scaleInfo.value} />
      ))}
    </div>
  );
}

export default SpaceCardList