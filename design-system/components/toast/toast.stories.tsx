// Import core
import { Meta, StoryObj } from '@storybook/react';
// Import third parts
// Import customs
import { Button } from '../button';
import { Toast, ToastProps } from './toast';
import { Toaster } from './';
import { useToast } from './use-toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['default', 'danger', 'warning', 'success', 'info', 'discovery'],
      description:
        'Determines whether a `single` or `multiple` items can be pressed at a time',
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: null },
      },
    },
    asChild: { table: { disable: true } },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A succinct message that is displayed temporarily.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%8D%9D-Fusillo-Design-System?type=design&node-id=540%3A8884&mode=design&t=Aq9znIDZ1U4lgvQV-1',
    },
  },
};
export default meta;

type Story = Omit<StoryObj<typeof Toast>, 'args'> & {
  args: Omit<ToasterToast, 'id'>;
};

type ToasterToast = ToastProps & {
  id: string;
  title?: string;
  description?: string;
  action?: string;
};

const ToastExample = (args: Story['args']) => {
  const { toast } = useToast();
  return (
    <div>
      <Button
        variant="secondary"
        onClick={() => {
          toast({
            ...args,
            status: args.status ?? 'default',
          });
        }}
      >
        Show Toast
      </Button>
      <Toaster />
    </div>
  );
};

export const Simple: Story = {
  render: (args) => <ToastExample {...args} />,
  args: {
    description: 'Your message has been sent.',
    status: 'default',
  },
};

export const WithTitle: Story = {
  render: (args) => <ToastExample {...args} />,
  args: {
    title: 'Uh oh! Something went wrong.',
    description: 'There was a problem with your request.',
    status: 'default',
  },
};

export const WithAction: Story = {
  render: (args) => <ToastExample {...args} />,
  args: {
    title: 'Uh oh! Something went wrong.',
    description: 'There was a problem with your request.',
    action: 'Try again',
    status: 'default',
  },
};

export const Brand: Story = {
  render: (args) => <ToastExample {...args} />,
  args: {
    title: 'Uh oh! Something went wrong.',
    description: 'There was a problem with your request.',
    action: 'Try again',
    status: 'brand',
  },
};

export const Danger: Story = {
  render: (args) => <ToastExample {...args} />,
  args: {
    title: 'Uh oh! Something went wrong.',
    description: 'There was a problem with your request.',
    action: 'Try again',
    status: 'danger',
  },
};

export const Warning: Story = {
  render: (args) => <ToastExample {...args} />,
  args: {
    title: 'Uh oh! Something went wrong.',
    description: 'There was a problem with your request.',
    action: 'Try again',
    status: 'warning',
  },
};
