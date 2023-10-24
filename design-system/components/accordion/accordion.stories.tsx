import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import './accordion.css';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './';

type AccordionArgs = {
  type: "single";
  collapsible: boolean;
  expandedByDefault: string;
};

const AccordionComponent = ({
  type,
  expandedByDefault,
}: AccordionArgs) => {
  return (
    <Accordion
      type={type}
      defaultValue={expandedByDefault}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other
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
  );
};

export default {
  title: 'Design System/Components/Accordion',
  component: AccordionComponent,
  parameters: {
    docs: {
      description: {
        component:
          'A vertically stacked set of interactive headings that each reveal a section of content.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=612%3A22584&mode=design&t=dqinUe6fM3Zi6mNS-1',
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      default: 'single',
      options: ['single', 'multiple'],
      control: { type: 'select' },
    },
    expandedByDefault: {
      options: ['item-1', 'item-2', 'item-3'],
      control: { type: 'select' },
    },
  },
  args: {
    type: 'single',
    expandedByDefault: '',
  },
} as Meta<typeof AccordionComponent>;

type Story = StoryObj<typeof AccordionComponent>;

export const Default = {
  args: {
    type: 'single',
    expandedByDefault: '',
  },
};

export const Expanded = {
  args: {
    type: 'single',
    expandedByDefault: 'item-1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the defaultValue prop to define the open item by default.',
      },
    },
  },
};
Expanded.storyName = 'Expanded by default';

export const Multiple = {
  args: {
    type: 'multiple',
    expandedByDefault: '',
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
Multiple.storyName = 'Multiple items opened';