// Import core
import { Meta, StoryObj } from '@storybook/react';
// Import third parts
// Import customs
import { Slider } from './';


const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Base: Story = {
  args: {
    defaultValue: [33],
    max: 100,
    step: 1,
  },
};

export const Interval: Story = {
  args: {
    defaultValue: [33, 88],
    max: 100,
    step: 2,
  },
};
