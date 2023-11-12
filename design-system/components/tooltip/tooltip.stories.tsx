// Import core
import { Meta, StoryObj } from '@storybook/react';
// Import third parts
// Import customs
import { Button } from '../button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './';


const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'centered',
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
            Add
          </Button>
        </TooltipTrigger>
        <TooltipContent side='top'>
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
          <Button variant="secondary">Add</Button>
        </TooltipTrigger>
        <TooltipContent style="fill" side="top">
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  args: {},
};
