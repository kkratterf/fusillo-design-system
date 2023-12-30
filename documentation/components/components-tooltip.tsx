// Import core
import { FilePlus } from 'lucide-react';
// Import customs
import { AccessibilityTable } from '@/docs/components/accessibility-table';
import Preview from '@/docs/components/preview';
import { Button } from 'design-system/components/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from 'design-system/components/tooltip';

export const TooltipPreview = () => (
  <Preview>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary" icon={true}>
            <FilePlus />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Preview>
);

export const TooltipOutline = () => (
  <Preview>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary" icon={true}>
            <FilePlus />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Preview>
);

export const TooltipFilled = () => (
  <Preview>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary" icon={true}>
            <FilePlus />
          </Button>
        </TooltipTrigger>
        <TooltipContent type="fill">
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Preview>
);

export const TooltipSide = () => (
  <Preview>
    <div className="grid justify-items-center sm:flex gap-5">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" icon={true}>
              <FilePlus />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" icon={true}>
              <FilePlus />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" icon={true}>
              <FilePlus />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary" icon={true}>
              <FilePlus />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </Preview>
);

export const TooltipAccessibility = () => {
  const tooltipAccessibilityData = [
    {
      key: 'Space',
      description: 'If open, closes the tooltip without delay.',
    },
    {
      key: 'Enter',
      description: 'If open, closes the tooltip without delay.',
    },
    {
      key: 'Tab',
      description: 'Opens/closes the tooltip without delay.',
    },
    {
      key: 'Esc',
      description: 'If open, closes the tooltip without delay.',
    },
  ];
  return <AccessibilityTable rows={tooltipAccessibilityData} />;
};
