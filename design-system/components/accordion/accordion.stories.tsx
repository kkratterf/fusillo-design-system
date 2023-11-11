// Import core
import { Meta, StoryObj } from '@storybook/react';
// Import third parts
// Import customs
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['single', 'multiple'],
      control: { type: 'select' },
      description:
        'Set the type prop to multiple to enable opening multiple items at once',
    },
    collapsible: {
      description: 'Use the collapsible prop to allow all items to close',
    },
    asChild: { table: { disable: true } },
    defaultValue: {
      options: ['item-1', 'item-2', 'item-3'],
      control: { type: 'select' },
      description:
        'Use the defaultValue prop to define the open item by default',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A vertically stacked set of interactive headings that each reveal a section of content.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=233%3A748&mode=design&t=MpDMELWReoDbdLIS-1',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Single: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  args: {
    type: 'single',
    collapsible: true,
    defaultValue: undefined,
  },
};

export const Multiple: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  args: {
    type: 'multiple',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Set the type prop to multiple to enable opening multiple items at once.',
      },
    },
  },
};

export const DefaultValue: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  args: {
    type: 'single',
    collapsible: false,
    defaultValue: 'item-2',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the defaultValue prop to define the open item by default.',
      },
    },
  },
};
