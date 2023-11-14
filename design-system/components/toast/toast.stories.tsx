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
  argTypes: {},
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
  status?: string;
};

const ToastExample = (args: Story['args']) => {
  const { toast } = useToast();
  return (
    <div>
      <Button
        variant="secondary"
        onClick={() => {
          toast(args);
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

export const Danger: Story = {
  render: (args) => <ToastExample {...args} />,
  args: {
    title: 'Uh oh! Something went wrong.',
    description: 'There was a problem with your request.',
    action: 'Try again',
    status: 'danger',
  },
};
