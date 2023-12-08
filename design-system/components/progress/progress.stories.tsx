// Import core
import { useEffect, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
// Import third parts
// Import customs
import { Progress } from './';


const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: [
        'default',
        'brand',
        'danger',
        'warning',
        'success',
        'info',
        'discovery',
      ],
      description:
        'Use the `status` prop to define the type of message communicated by the badge.',
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: null },
      },
    },
    value: {
      description: 'The progress value.',
      table: {
        type: { summary: null },
      },
    },
    asChild: { table: { disable: true } },
  },
  args: {
    status: 'default',
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=540%3A8872&mode=design&t=BNqih1pZMuav038B-1',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: (args) => <Progress {...args} className='w-[400px]'/>,
  args: {
    status: 'default',
    value: 33,
  },
};

export const Brand: Story = {
  render: (args) => <Progress {...args} className="w-[400px]" />,
  args: {
    status: 'brand',
    value: 33,
  },
};

export const Danger: Story = {
  render: (args) => <Progress {...args} className="w-[400px]" />,
  args: {
    status: 'danger',
    value: 33,
  },
};

export const Warning: Story = {
  render: (args) => <Progress {...args} className="w-[400px]" />,
  args: {
    status: 'warning',
    value: 33,
  },
};

export const Success: Story = {
  render: (args) => <Progress {...args} className="w-[400px]" />,
  args: {
    status: 'success',
    value: 33,
  },
};

export const Info: Story = {
  render: (args) => <Progress {...args} className="w-[400px]" />,
  args: {
    status: 'info',
    value: 33,
  },
};

export const Discovery: Story = {
  render: (args) => <Progress {...args} className="w-[400px]" />,
  args: {
    status: 'discovery',
    value: 33,
  },
};