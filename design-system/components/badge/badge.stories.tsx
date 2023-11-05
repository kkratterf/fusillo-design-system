import { Meta, StoryObj } from '@storybook/react';

import { Badge } from './';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Base: Story = {
  render: (args) => <Badge {...args}>Badge</Badge>,
  args: {},
};

export const Secondary: Story = {
  render: (args) => <Badge {...args}>Badge</Badge>,
  args: {
    variant: 'secondary',
  },
};

export const Danger: Story = {
  render: (args) => <Badge {...args}>Badge</Badge>,
  args: {
    variant: 'danger',
  },
};

export const Outline: Story = {
  render: (args) => <Badge {...args}>Badge</Badge>,
  args: {
    variant: 'outline',
  },
};
