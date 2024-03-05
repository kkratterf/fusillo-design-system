// Import core
import * as React from 'react';
import { ChevronsUpDown } from 'lucide-react';
// Import customs
import Preview from '@docs/components/preview/preview';
import { Button } from '@design-system/components/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@design-system/components/collapsible';

export const CollapsiblePreview = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Preview>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[340px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <p className="text-md-semibold">@kkratterf starred 3 repositories</p>
          <CollapsibleTrigger asChild>
            <Button variant="text" icon={true}>
              <ChevronsUpDown />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded border border-default px-4 py-3 font-mono text-md">
          @design-system/foundations
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded border border-default px-4 py-3 font-mono text-md">
            @design-system/tokens
          </div>
          <div className="rounded border border-default px-4 py-3 font-mono text-md">
            @design-system/components
          </div>
          <div className="rounded border border-default px-4 py-3 font-mono text-md">
            @design-system/visualizations
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Preview>
  );
};
