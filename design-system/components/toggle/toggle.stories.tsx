// Import core
import { Meta, StoryObj } from '@storybook/react';
// Import third parts
import { Bold, Italic, Underline } from 'lucide-react';
// Import customs
import { Toggle } from './';


const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Toggle>;

export const Base: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle italic">
      <Bold />
    </Toggle>
  ),
  args: {},
};

export const Outline: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle italic">
      <Italic />
    </Toggle>
  ),
  args: {
    variant: 'outline',
  },
};

export const WithText: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle italic">
      <Italic />
      Italic
    </Toggle>
  ),
  args: {},
};

export const Disabled: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle italic">
      <Underline className="h-4 w-4" />
    </Toggle>
  ),
  args: {
    disabled: true,
  },
};
