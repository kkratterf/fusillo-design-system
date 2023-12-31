// Import core
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { ChevronsUpDown } from 'lucide-react';
// Import customs
import { Button } from '@/components/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/collapsible';

type CollapsibleDemoProps = {
  open?: boolean;
  onOpenChange?: (newOpen: boolean) => void;
};

const CollapsibleDemo = ({
  open,
  onOpenChange,
  ...restArgs
}: CollapsibleDemoProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open);
    }
  }, [open]);

  const handleOpenChange = (newOpen: boolean) => {
    setIsOpen(newOpen);
    if (onOpenChange) {
      onOpenChange(newOpen);
    }
  };

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={handleOpenChange}
      className="w-[340px] space-y-2"
      {...restArgs}
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <p className="text-md-semibold">@kkratter starred 3 repositories</p>
        <CollapsibleTrigger asChild>
          <Button variant="text" icon={true}>
            <ChevronsUpDown />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded border px-4 py-3 font-mono text-md">
        @design-system/foundations
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded border px-4 py-3 font-mono text-md">
          @design-system/tokens
        </div>
        <div className="rounded border px-4 py-3 font-mono text-md">
          @design-system/components
        </div>
        <div className="rounded border px-4 py-3 font-mono text-md">
          @design-system/data-visualization
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

const meta: Meta<typeof Collapsible> = {
  title: 'Components/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'The controlled open state of the collapsible.',
    },
    onOpenChange: {
      description:
        'Event handler called when the open state of the collapsible changes.',
    },
    defaultOpen: {
      control: 'boolean',
      description:
        'The open state of the collapsible when it is initially rendered. Use when you do not need to control its open state.',
      table: {
        type: { summary: null },
      },
    },
    disabled: {
      control: 'boolean',
      description:
        'Use the `disabled` prop to prevent user actions when certain conditions are not met.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: null },
      },
    },
    asChild: { table: { disable: true } },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An interactive component which expands/collapses a panel.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=550%3A41441&mode=design&t=BNqih1pZMuav038B-1',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: (args) => <CollapsibleDemo {...args} />,
  args: {
    open: false,
    onOpenChange: () => null,
    disabled: false,
    defaultOpen: false,
  },
};