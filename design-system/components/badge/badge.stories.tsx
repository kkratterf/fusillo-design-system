// Import core
import { Meta, StoryObj } from '@storybook/react';
// Import third parts
// Import customs
import { Badge } from './';
import { BrainCircuit } from 'lucide-react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    status: 'default',
  },
  argTypes: {
    status: {
      options: ['default', 'danger', 'warning', 'success', 'info', 'discovery'],
      control: { type: 'select' },
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Visual indicator for states or numeric values such as tallies and scores.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=233%3A749&mode=design&t=MpDMELWReoDbdLIS-1',
    },
  },
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

export const Warning: Story = {
  render: (args) => <Badge {...args}>Badge</Badge>,
  args: {
    status: 'warning',
  },
};

export const Success: Story = {
  render: (args) => <Badge {...args}>Badge</Badge>,
  args: {
    status: 'success',
  },
};

export const Info: Story = {
  render: (args) => <Badge {...args}>Badge</Badge>,
  args: {
    status: 'info',
  },
};

export const Discovery: Story = {
  render: (args) => <Badge {...args}><BrainCircuit />Badge</Badge>,
  args: {
    status: 'discovery',
  },
};
