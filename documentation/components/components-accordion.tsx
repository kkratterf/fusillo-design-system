// Import core
// Import customs
import { AccessibilityTable } from '@/docs/components/accessibility-table.mdx';
import Preview from '@/docs/components/preview';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'design-system/components/accordion';

export const AccordionPreview = () => (
  <Preview>
    <Accordion type="single" collapsible className="w-full">
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
        <AccordionContent>Yes. It&apos;s animated by default.</AccordionContent>
      </AccordionItem>
    </Accordion>
  </Preview>
);

export const AccordionSingle = () => (
  <Preview>
    <Accordion type="single" className="w-full">
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
        <AccordionContent>Yes. It&apos;s animated by default.</AccordionContent>
      </AccordionItem>
    </Accordion>
  </Preview>
);

export const AccordionMultiple = () => (
  <Preview>
    <Accordion type="multiple" className="w-full">
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
        <AccordionContent>Yes. It&apos;s animated by default.</AccordionContent>
      </AccordionItem>
    </Accordion>
  </Preview>
);

export const AccordionCollapsible = () => (
  <Preview>
    <Accordion type="single" collapsible className="w-full">
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
        <AccordionContent>Yes. It&apos;s animated by default.</AccordionContent>
      </AccordionItem>
    </Accordion>
  </Preview>
);

export const AccordionDefaultValue = () => (
  <Preview>
    <Accordion
      type="single"
      collapsible
      defaultValue="item-2"
      className="w-full"
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
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. It&apos;s animated by default.</AccordionContent>
      </AccordionItem>
    </Accordion>
  </Preview>
);

export const AccordionAccessibility = () => {
  const accordionAccessibilityData = [
    {
      key: 'Space',
      description: (
        <>
          When focus is on an{' '}
          <code className="cell-accessibility-code">AccordionTrigger</code> of a
          collapsed section, expands the section.
        </>
      ),
    },
    {
      key: 'Enter',
      description: (
        <>
          When focus is on an{' '}
          <code className="cell-accessibility-code">AccordionTrigger</code> of a
          collapsed section, expands the section.
        </>
      ),
    },
    {
      key: 'Tab',
      description: 'Moves focus to the next focusable element.',
    },
    {
      key: 'Shift+Tab',
      description: 'Moves focus to the previous focusable element.',
    },
    {
      key: 'ArrowDown',
      description: (
        <>
          Moves focus to the next{' '}
          <code className="cell-accessibility-code">AccordionTrigger</code>
        </>
      ),
    },
    {
      key: 'ArrowUp',
      description: (
        <>
          Moves focus to the previous{' '}
          <code className="cell-accessibility-code">AccordionTrigger</code>
        </>
      ),
    },
    {
      key: 'Home',
      description: (
        <>
          When focus is on an{' '}
          <code className="cell-accessibility-code">AccordionTrigger</code>,
          moves focus to the first{' '}
          <code className="cell-accessibility-code">AccordionTrigger</code>
        </>
      ),
    },
    {
      key: 'End',
      description: (
        <>
          When focus is on an{' '}
          <code className="cell-accessibility-code">AccordionTrigger</code>,
          moves focus to the last{' '}
          <code className="cell-accessibility-code">AccordionTrigger</code>
        </>
      ),
    },
  ];
  return <AccessibilityTable rows={accordionAccessibilityData} />;
};
