import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    theme: 'light'
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'default',
    theme: 'light'
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    theme: 'light'
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    theme: 'light'
  },
};