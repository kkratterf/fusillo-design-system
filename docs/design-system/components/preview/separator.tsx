// Import core
// Import customs
import Preview from '@docs/components/preview/preview';
import { Separator } from '@design-system/components/separator';
import * as ds from '@docs/tokens/config.js';

export const SeparatorPreview = () => (
  <Preview>
    <div>
      <div className="space-y-1">
        <h4 className="text-lg-semibold leading-none">{ds.ConfigName}</h4>
        <p className="text-md text-description">
          Crafting inclusive experiences for everyone
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-md">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  </Preview>
);

export const SeparatorHorizontal = () => (
  <Preview>
    <div>
        <h4 className="text-lg-semibold leading-none">{ds.ConfigName}</h4>
        <Separator className="my-4" />
        <p className="text-md text-description">
          Crafting inclusive experiences for everyone
        </p>
    </div>
  </Preview>
);

export const SeparatorVertical = () => (
  <Preview>
    <div className="flex h-5 items-center space-x-4 text-md">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  </Preview>
);
