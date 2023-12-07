// Import core
import { Meta, StoryObj } from '@storybook/react';
// Import third parts
import { FilePlus } from 'lucide-react';
// Import customs
import { Button } from '../button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from './';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A floating, non-actionable label used to explain a user interface element or feature.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=540%3A8886&mode=design&t=ADS6PLdzJ7eQkKd7-1',
    },
  },
};
export default meta;

type TooltipCustomProps = {
  type?: 'outline' | 'fill';
  side?: 'top' | 'bottom' | 'left' | 'right';
};

type Story = StoryObj<TooltipCustomProps>;

export const Outline: Story = {
  render: (args) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="my-6">
            <Button variant="secondary" icon={true}>
              <FilePlus />
            </Button>
          </div>
        </TooltipTrigger>
        <TooltipContent type={args.type} side={args.side}>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  args: {
    type: 'outline',
    side: 'top',
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['outline', 'fill'],
      description:
        'Use the `type` prop to define the look and feel of the tooltip',
      table: {
        defaultValue: { summary: 'outline' },
        type: { summary: null },
      },
    },
    side: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description:
        'Use the `side` prop to define the direction in which the tooltip will open',
      table: {
        defaultValue: { summary: 'top' },
        type: { summary: null },
      },
    },
  },
};

export const Fill: Story = {
  render: (args) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="my-6">
            <Button variant="secondary" icon={true}>
              <FilePlus />
            </Button>
          </div>
        </TooltipTrigger>
        <TooltipContent type={args.type} side={args.side}>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  args: {
    type: 'fill',
    side: 'top',
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['outline', 'fill'],
      table: {
        defaultValue: { summary: 'outline' },
        type: { summary: null },
      },
    },
    side: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      table: {
        defaultValue: { summary: 'top' },
        type: { summary: null },
      },
    },
  },
};


export const Side: Story = {
  render: (args) => (
    <div className="my-6 grid justify-items-center gap-6 sm:flex">
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
  ),
  args: {
    type: 'outline',
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['outline', 'fill'],
      table: {
        defaultValue: { summary: 'outline' },
        type: { summary: null },
      },
    },
    side: { table: { disable: true } },
  },
};
