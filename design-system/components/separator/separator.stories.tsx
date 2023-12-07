// Import core
import { Meta, StoryObj } from '@storybook/react';
// Import third parts
// Import customs
import { Separator } from './';
import * as logo from '../../../documentation/tokens/config';

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description:
        'use the `orientation` prop to define the axis that will divide the separator',
      table: {
        defaultValue: { summary: 'horizontal' },
        type: { summary: null },
      },
    },
    asChild: { table: { disable: true } },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Visually or semantically separates content.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=540%3A8876&mode=design&t=7r34RfU06jHXNJDx-1',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: (args) => (
    <div>
      <div className="space-y-1">
        <h4 className="text-md font-bold">{logo.ConfigName}</h4>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Crafting inclusive experiences for everyone
        </p>
      </div>
      <Separator {...args} orientation="horizontal" className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator {...args} orientation="vertical" />
        <div>Docs</div>
        <Separator {...args} orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
  args: {
    orientation: 'horizontal',
  },
};

export const Horizontal: Story = {
  render: (args) => (
    <div>
      <h4 className="text-md font-bold">{logo.ConfigName}</h4>
      <Separator {...args} className="my-4" />
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Crafting inclusive experiences for everyone
      </p>
    </div>
  ),
  args: {
    orientation: 'horizontal',
  },
  argTypes: {
    orientation: { table: { disable: true } },
  },
};

export const Vertical: Story = {
  render: (args) => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Separator {...args} orientation="vertical" />
      <div>Docs</div>
      <Separator {...args} orientation="vertical" />
      <div>Source</div>
    </div>
  ),
  args: {
    orientation: 'vertical',
  },
  argTypes: {
    orientation: { table: { disable: true } },
  },
};
