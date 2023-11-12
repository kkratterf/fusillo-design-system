// Import core
import { Meta, StoryObj } from '@storybook/react';
// Import third parts
// Import customs
import { Tag } from './';


const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  render: (args) => <Tag {...args}>Tag</Tag>,
  args: {},
};

export const Danger: Story = {
  render: (args) => <Tag {...args}>Tag</Tag>,
  args: {
    status: 'danger',
  },
};

export const Warning: Story = {
  render: (args) => <Tag {...args}>Tag</Tag>,
  args: {
    status: 'warning',
  },
};

export const Success: Story = {
  render: (args) => <Tag {...args}>Tag</Tag>,
  args: {
    status: 'success',
  },
};

export const Info: Story = {
  render: (args) => <Tag {...args}>Loading...</Tag>,
  args: {
    status: 'info',
  },
};

export const Discovery: Story = {
  render: (args) => <Tag {...args}>Discovery</Tag>,
  args: {
    status: 'discovery',
  },
};
