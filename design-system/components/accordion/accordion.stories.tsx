import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './';

const AccordionComponent: any = function () {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default {
  title: 'Design System/Components/Accordion',
  component: AccordionComponent,
} as Meta<typeof AccordionComponent>;

type Story = StoryObj<typeof AccordionComponent>;

export const Example: Story = {
  render: () => <AccordionComponent />,
};