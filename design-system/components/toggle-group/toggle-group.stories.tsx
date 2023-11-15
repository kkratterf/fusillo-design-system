// Import core
import { Meta, StoryObj } from '@storybook/react';
// Import third parts
import { Bold, Italic, Underline } from 'lucide-react';
// Import customs
import { ToggleGroup, ToggleGroupItem } from './';

const meta: Meta<typeof ToggleGroup> = {
  title: 'Components/Toggle Group',
  component: ToggleGroup,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ToggleGroup>;

export const Base: Story = {
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="a">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="b">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="c">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  args: {
    type: 'single',
  },
};