// Import core
import { Meta, StoryObj } from '@storybook/react';
// Import customs
import { Skeleton } from '@/components/skeleton';
import { Card, CardContent } from '@/components/card';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: 'radio',
      options: ['circle', 'line'],
      description:
        'Represent the element that the skeleton is replacing',
      table: {
        type: { summary: null },
      },
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Use to show a placeholder while content is loading.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=540%3A8878&mode=design&t=7r34RfU06jHXNJDx-1',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Circle: Story = {
  render: (args) => (
    <div className="flex items-center justify-center w-[320px] h-24">
      <Skeleton {...args} />
    </div>
  ),
  args: {
    shape: 'circle',
  },
};

export const Line: Story = {
  render: (args) => (
    <div className='flex items-center justify-center w-[320px] h-24'>
      <Skeleton {...args} />
    </div>
  ),
  args: {
    shape: 'line',
  },
};

export const WithCard: Story = {
  render: (args) => (
    <Card>
      <CardContent className="flex items-center space-x-4 pt-6">
        <Skeleton shape="circle" />
        <div className="space-y-2">
          <Skeleton shape="line" className="w-[250px]" />
          <Skeleton shape="line" className="w-[200px]" />
        </div>
      </CardContent>
    </Card>
  ),
  argTypes: {
    shape: { table: { disable: true } },
  },
};
