// Import core
// Import customs
import Preview from '@/docs/components/preview';
import { Card, CardContent } from 'design-system/components/card';
import { Skeleton } from 'design-system/components/skeleton';

export const SkeletonPreview = () => (
  <Preview>
    <div className="flex items-center space-x-4">
      <Skeleton shape="circle" />
      <div className="space-y-2">
        <Skeleton shape="line" className="w-[250px]" />
        <Skeleton shape="line" className="w-[200px]" />
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
    <Skeleton shape="line" className="w-[250px]" />
  </Preview>
);

export const SkeletonCard = () => (
  <Preview>
    <Card>
      <CardContent className="flex items-center space-x-4 pt-6">
        <Skeleton shape="circle" />
        <div className="space-y-2">
          <Skeleton shape="line" className="w-[250px]" />
          <Skeleton shape="line" className="w-[200px]" />
        </div>
      </CardContent>
    </Card>
  </Preview>
);