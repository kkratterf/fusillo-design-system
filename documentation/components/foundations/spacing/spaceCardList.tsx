import React from 'react';
import space from '../../../../design-tokens/export/foundations.js';
import SpaceCard from './spaceCard.js';

function SpaceCardList() {
  const spacing = space.Foundations.Spacing;
  return (
    <div className='scale__grid'>
      {Object.entries(spacing).map(([spaceName, spaceInfo]) => (
        <SpaceCard key={spaceName} name={spaceName} value={spaceInfo.value} />
      ))}
    </div>
  );
}

export default SpaceCardList