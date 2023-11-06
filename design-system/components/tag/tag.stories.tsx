import { Meta, StoryObj } from '@storybook/react';

import { Tag } from './';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Base: Story = {
  render: (args) => <Tag {...args}>Tag</Tag>,
  args: {},
};

export const Secondary: Story = {
  render: (args) => <Tag {...args}>Tag</Tag>,
  args: {
    variant: 'secondary',
  },
};

export const Danger: Story = {
  render: (args) => <Tag {...args}>Tag</Tag>,
  args: {
    variant: 'danger',
  },
};

export const Outline: Story = {
  render: (args) => <Tag {...args}>Tag</Tag>,
  args: {
    variant: 'outline',
  },
};
