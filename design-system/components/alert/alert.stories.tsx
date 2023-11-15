// Import core
import { Meta, StoryObj } from '@storybook/react';
// Import third parts
import { AlertCircle, Terminal } from 'lucide-react';
// Import customs
import { Alert, AlertIcon, AlertDescription, AlertTitle } from './';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    status: {
      options: ['default', 'danger', 'warning', 'success', 'info', 'discovery'],
      control: { type: 'select' },
      description: 'There are 6 types of status:',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Displays a callout for user attention.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=233%3A751&mode=design&t=F5zgbD2phu8xvUpj-1',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
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
    status: 'default',
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
    status: 'danger',
  },
};

export const Warning: Story = {
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
    status: 'warning',
  },
};

export const Success: Story = {
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
    status: 'success',
  },
};

export const Info: Story = {
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
    status: 'info',
  },
};

export const Discovery: Story = {
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
    status: 'discovery',
  },
};
