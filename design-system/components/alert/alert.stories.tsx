import { Meta, StoryObj } from '@storybook/react';
import { AlertCircle, Terminal } from 'lucide-react';

import {
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
} from './';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Base: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertIcon>
        <Terminal />
      </AlertIcon>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
  args: {
    variant: 'default',
  },
};

export const Danger: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertIcon>
        <AlertCircle />
      </AlertIcon>
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
  args: {
    variant: 'danger',
  },
};
