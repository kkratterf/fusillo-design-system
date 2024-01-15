// Import core
import { Meta, StoryObj } from '@storybook/react';
import {
  AlertTriangle,
  Heart,
  Umbrella,
  XCircle,
} from 'lucide-react';
// Import customs
import { Tag } from '@/components/tag';


const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: [
        'default',
        'brand',
        'danger',
        'warning',
      ],
      description:
        'Define the type of message communicated by the badge',
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: null },
      },
    },
  },
  args: {
    status: 'default',
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Displays an element for categorizing or markup.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=635%3A3323&mode=design&t=7r34RfU06jHXNJDx-1',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  render: (args) => <Tag {...args}><Umbrella />Umbrella</Tag>,
  args: {
    status: 'default',
  },
};

export const Brand: Story = {
  render: (args) => <Tag {...args}><Heart />Favourite</Tag>,
  args: {
    status: 'brand',
  },
};

export const Danger: Story = {
  render: (args) => <Tag {...args}><XCircle />Failed</Tag>,
  args: {
    status: 'danger',
  },
};

export const Warning: Story = {
  render: (args) => <Tag {...args}><AlertTriangle />Caution</Tag>,
  args: {
    status: 'warning',
  },
};
