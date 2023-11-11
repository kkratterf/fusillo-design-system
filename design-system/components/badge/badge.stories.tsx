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

export const Danger: Story = {
  render: (args) => <Badge {...args}>Badge</Badge>,
  args: {
    status: 'danger',
  },
};
