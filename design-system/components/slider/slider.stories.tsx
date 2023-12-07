// Import core
import { Meta, StoryObj } from '@storybook/react';
// Import third parts
// Import customs
import { Slider } from './';


const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  args: {
    defaultValue: [25],
    max: 100,
    min: 0,
    step: 1,
    minStepsBetweenThumbs: 0,
    disabled: false,
  },
  argTypes: {
    defaultValue: {
      control: { type: 'object', min: 1, max: 100, step: 1 },
      description: 'Add multiple `values` to create a range slider.',
    },
    max: {
      control: { type: 'number', min: 1, max: 10000, step: 1 },
      description:
        'Use the `max` prop to change the maximum value for the range.',
      table: {
        defaultValue: { summary: 100 },
        type: { summary: null },
      },
    },
    min: {
      control: { type: 'number', min: 0, max: 10000, step: 1 },
      description:
        'Use the `min` prop to change the minimum value for the range.',
      table: {
        defaultValue: { summary: 0 },
        type: { summary: null },
      },
    },
    step: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
      description: 'Use the `step` prop to change the stepping interval.',
      table: {
        defaultValue: { summary: 1 },
        type: { summary: null },
      },
    },
    minStepsBetweenThumbs: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
      description:
        'Use `minStepsBetweenThumbs` to avoid thumbs with equal values.',
      table: {
        defaultValue: { summary: 0 },
        type: { summary: null },
      },
    },
    disabled: {
      control: 'boolean',
      description:
        'Use the `disabled`props to prevent user actions when certain conditions are not met.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: null },
      },
    },
    asChild: { table: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'An input where the user selects a value from within a given range.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=540%3A8879&mode=design&t=7r34RfU06jHXNJDx-1',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center justify-items-center w-full h-40 p-10">
      <Slider {...args} />
    </div>
  ),
  args: {
    defaultValue: [25],
    max: 100,
    min: 0,
    step: 1,
    minStepsBetweenThumbs: 0,
    disabled: false,
  },
};

export const Range: Story = {
  render: (args) => (
    <div className="flex items-center justify-items-center w-full h-40 p-10">
      <Slider {...args} />
    </div>
  ),
  args: {
    defaultValue: [25,75],
    max: 100,
    min: 0,
    step: 1,
    minStepsBetweenThumbs: 0,
    disabled: false,
  },
};

export const StepSize: Story = {
  render: (args) => (
    <div className="flex items-center justify-items-center w-full h-40 p-10">
      <Slider {...args} />
    </div>
  ),
  args: {
    defaultValue: [25],
    max: 100,
    min: 0,
    step: 10,
    minStepsBetweenThumbs: 0,
    disabled: false,
  },
};

export const PreventThumbOverlap: Story = {
  render: (args) => (
    <div className="flex items-center justify-items-center w-full h-40 p-10">
      <Slider {...args} />
    </div>
  ),
  args: {
    defaultValue: [25,75],
    max: 100,
    min: 0,
    step: 10,
    minStepsBetweenThumbs: 1,
    disabled: false,
  },
};
