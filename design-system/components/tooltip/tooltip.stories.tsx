// Import core
import { Meta, StoryObj } from '@storybook/react';
// Import third parts
// Import customs
import { Button } from '../button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './';
import { Plus } from 'lucide-react';


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

type Story = StoryObj<typeof Tooltip>;

export const Outline: Story = {
  render: (args) => (
    <TooltipProvider>
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="secondary">
            <Plus />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  args: {},
};

export const Fill: Story = {
  render: (args) => (
    <TooltipProvider>
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="secondary"><Plus/></Button>
        </TooltipTrigger>
        <TooltipContent style="fill" side="top">
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  args: {},
};
