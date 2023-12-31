// Import core
import { Meta, StoryObj } from '@storybook/react';
// Import customs
import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description:
        'Use the `size` prop to define the dimention of the avatar',
      table: {
        defaultValue: { summary: 'lg' },
        type: { summary: null },
      },
    },
    asChild: { table: { disable: true } },
  },
  args: {
    size: 'lg',
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Visual representation of a user or entity.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=164%3A293&mode=design&t=ADS6PLdzJ7eQkKd7-1',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const ExtraSmall: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  args: {
    size: 'xs',
  },
};

export const Small: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  args: {
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  args: {
    size: 'xl',
  },
};

export const Fallback: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The `AvatarFallback` is an element that renders when the image hasn&apos;t loaded.',
      },
    },
  },
};
