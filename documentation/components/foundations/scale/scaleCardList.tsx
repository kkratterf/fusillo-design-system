import React from 'react';
import scale from '../../../../design-tokens/export/foundations.js';
import ScaleCard from './scaleCard.js';

function ScaleCardList() {
  const scales = scale.Foundations.Scale;
  return (
    <div className='scale__grid'>
      {Object.entries(scales).map(([scaleName, scaleInfo]) => (
        <ScaleCard key={scaleName} name={scaleName} value={scaleInfo.value} />
      ))}
    </div>
  );
}

export default ScaleCardList