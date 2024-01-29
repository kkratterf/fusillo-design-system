import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@design-system/components/accordion';
import {
  Button
} from '@design-system/components/button';

export default function Home() {
  return (
    <main className="">
      <Accordion type="single" collapsible className="w-[400px] m-40">
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
            Yes. It&apos;s animated by default.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button variant='danger'>Danger</Button>
    </main>
  );
}
