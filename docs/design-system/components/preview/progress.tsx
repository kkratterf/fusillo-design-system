// Import core
// Import customs
import Preview from '@docs/components/preview/preview';
import { Progress } from '@design-system/components/progress';

export const ProgressPreview = () => (
  <Preview>
    <Progress value={33} className="w-[60%]" />
  </Preview>
);

export const ProgressDefault = () => (
  <Preview>
    <Progress status="default" value={33} className="w-[60%]" />
  </Preview>
);

export const ProgressBrand = () => (
  <Preview>
    <Progress status="brand" value={33} className="w-[60%]" />
  </Preview>
);

export const ProgressDanger = () => (
  <Preview>
    <Progress status="danger" value={33} className="w-[60%]" />
  </Preview>
);

export const ProgressWarning = () => (
  <Preview>
    <Progress status="warning" value={33} className="w-[60%]" />
  </Preview>
);
