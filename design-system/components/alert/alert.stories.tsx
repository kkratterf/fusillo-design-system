// Import core
import { Meta, StoryObj } from '@storybook/react';
// Import third parts
import { AlertTriangle, BrainCircuit, CheckCircle, InfoIcon, Megaphone, XCircle } from 'lucide-react';
// Import customs
import { Alert, AlertIcon, AlertDescription, AlertTitle } from './';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['default', 'danger', 'warning', 'success', 'info', 'discovery'],
      description:
        'Use the `status` prop to define the type of message communicated by the alert',
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: null },
      },
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
        <Megaphone />
      </AlertIcon>
      <AlertTitle>Notice</AlertTitle>
      <AlertDescription>
        This is a general notification for your attention. It provides neutral
        information or basic reminders for everyday tasks.
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
        <XCircle />
      </AlertIcon>
      <AlertTitle>Error Detected!</AlertTitle>
      <AlertDescription>
        Critical issue encountered! Please address this error immediately to
        prevent system failure or data loss.
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
        <AlertTriangle />
      </AlertIcon>
      <AlertTitle>Caution Advised</AlertTitle>
      <AlertDescription>
        Be cautious! There are certain risks associated with this action. Review
        and proceed with care.
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
        <CheckCircle />
      </AlertIcon>
      <AlertTitle>Operation Successful</AlertTitle>
      <AlertDescription>
        The action was completed successfully! Your changes have been saved or
        the process has finished without issues.
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
        <InfoIcon />
      </AlertIcon>
      <AlertTitle>Did You Know?</AlertTitle>
      <AlertDescription>
        Here&apos;s some useful information or context about the current process or
        section that might be helpful to you.
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
        <BrainCircuit />
      </AlertIcon>
      <AlertTitle>Discover More</AlertTitle>
      <AlertDescription>
        Explore this feature! There are additional options and functionalities
        waiting to be uncovered that could enhance your experience.
      </AlertDescription>
    </Alert>
  ),
  args: {
    status: 'discovery',
  },
};
