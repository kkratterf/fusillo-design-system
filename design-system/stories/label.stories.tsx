// Import core
import { Meta, StoryObj } from '@storybook/react';
// Import customs
import { Label } from '@/components/label';
import { Checkbox } from '@/components/checkbox';
import { Input } from '@/components/input';
import { Textarea } from '@/components/textarea';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    asChild: { table: { disable: true } },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Renders an accessible label associated with controls.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=540%3A8868&mode=design&t=7r34RfU06jHXNJDx-1',
    },
  },
};
export default meta;

type LabelCustomProps = {
  label?: string;
};

type Story = StoryObj<LabelCustomProps>;

export const WithCheckbox: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">{args.label}</Label>
    </div>
  ),
  args: {
    label: 'Accept terms and conditions',
  },
};

export const WithInput: Story = {
  render: (args) => (
    <div className="grid w-[320px] max-w-sm items-center gap-3">
      <Label htmlFor="email">{args.label}</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
  args: {
    label: 'Email',
  },
};

export const WithTextarea: Story = {
  render: (args) => (
    <div className="grid w-[320px] gap-3">
      <Label htmlFor="message">{args.label}</Label>
      <Textarea placeholder="Once upon a time..." id="message" />
    </div>
  ),
  args: {
    label: 'Your story',
  },
};
