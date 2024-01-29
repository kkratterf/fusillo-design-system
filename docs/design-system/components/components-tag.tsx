// Import core
import {
  AlertTriangle,
  Heart,
  Umbrella,
  XCircle,
} from 'lucide-react';
// Import customs
import Preview from '@docs/components/preview';
import { Tag } from '@design-system/components/tag';

export const TagPreview = () => (
  <Preview>
    <Tag>
      <Umbrella />
      Umbrella
    </Tag>
  </Preview>
);

export const TagDefault = () => (
  <Preview>
    <Tag status="default">
      <Umbrella />
      Umbrella
    </Tag>
  </Preview>
);

export const TagBrand = () => (
  <Preview>
    <Tag status="brand">
      <Heart />
      Favourite
    </Tag>
  </Preview>
);

export const TagDanger = () => (
  <Preview>
    <Tag status="danger">
      <XCircle />
      Failed
    </Tag>
  </Preview>
);

export const TagWarning = () => (
  <Preview>
    <Tag status="warning">
      <AlertTriangle />
      Caution
    </Tag>
  </Preview>
);
