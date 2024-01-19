// Import core
// Import customs
import Preview from '@docs/components/preview';
import { Card, CardContent } from '@design-system/components/card';
import { Skeleton } from '@design-system/components/skeleton';

export const SkeletonPreview = () => (
  <Preview>
    <div className="flex items-center space-x-4">
      <Skeleton shape="circle" />
      <div className="space-y-2">
        <Skeleton shape="line" className="w-60" />
        <Skeleton shape="line" className="w-40" />
      </div>
    </div>
  </Preview>
);

export const SkeletonCircle = () => (
  <Preview>
    <Skeleton shape="circle" />
  </Preview>
);

export const SkeletonLine = () => (
  <Preview>
    <Skeleton shape="line" className="w-60" />
  </Preview>
);

export const SkeletonCard = () => (
  <Preview>
    <Card>
      <CardContent className="flex items-center space-x-4">
        <Skeleton shape="circle" />
        <div className="space-y-2">
          <Skeleton shape="line" className="w-60" />
          <Skeleton shape="line" className="w-40" />
        </div>
      </CardContent>
    </Card>
  </Preview>
);
