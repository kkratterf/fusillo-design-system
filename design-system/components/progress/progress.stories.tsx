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
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Progress>;

export const Base: Story = {
  render: (args) => <Progress {...args} />,
  args: {
    value: 30,
  },
};
export const Animated: Story = {
  render: (args) => <ProgressDemo {...args} />,
  args: {
    value: 13,
  },
};

const ProgressDemo = (args: Story['args']) => {
  const [progress, setProgress] = useState(args?.value);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress {...args} value={progress} className="w-[60%]" />;
};
