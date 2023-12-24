// Import core
import { Meta, StoryObj } from '@storybook/react';
// Import third parts
import { Bold, Italic, Underline } from 'lucide-react';
// Import customs
import { ToggleGroup, ToggleGroupItem } from './';

const meta: Meta<typeof ToggleGroup> = {
  title: 'Components/Toggle Group',
  component: ToggleGroup,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['single', 'multiple'],
      description:
        'Determines whether a `single` or `multiple` items can be pressed at a time',
      table: {
        defaultValue: { summary: 'multiple' },
        type: { summary: null },
      },
    },
    variant: {
      control: 'radio',
      options: ['default', 'outline'],
      description: 'Determines the look of the of the toggle',
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: null },
      },
    },
    disabled: {
      control: 'boolean',
      description:
        'Use the `disabled` prop to prevent user actions when certain conditions are not met',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: null },
      },
    },
    asChild: { table: { disable: true } },
  },
  args: {
    type: 'multiple',
    variant: 'default',
    disabled: false,
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A set of two-state buttons that can be toggled on or off.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%8D%9D-Fusillo-Design-System?type=design&node-id=1063%3A304&mode=design&t=Aq9znIDZ1U4lgvQV-1',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="a">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="b">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="c">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  args: {
    type: 'multiple',
  },
};

export const Outlined: Story = {
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="a">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="b">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="c">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  args: {
    type: 'multiple',
    variant: 'outline',
  },
};


export const Single: Story = {
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="a">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="b">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="c">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  args: {
    type: 'single',
  },
};


export const Disabled: Story = {
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="a">
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value="b">
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value="c">
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  args: {
    type: 'single',
    disabled: true,
  },
};