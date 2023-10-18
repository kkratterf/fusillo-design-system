import { IconAccessibility, IconMail, IconMailCheck } from '@/components/icon';
import { Button } from '@/components/button';
import { ThemeProvider } from '@/components/theme';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/accordion';

import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from '@/components/alert';


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="space-y-4 z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <ThemeProvider theme="dark">
          <Button title="Diocan" />
          <Alert>
            <IconAccessibility color="brand" size="xl" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components and dependencies to your app using the cli.
            </AlertDescription>
          </Alert>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Diocan</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ThemeProvider>
        <ThemeProvider theme="light">
          <Button title="Diocan" />
        </ThemeProvider>
        <ThemeProvider>
          <Button title="Diocan" />
        </ThemeProvider>
        <Button asChild={true}>
          <Link href="/login">Diocan</Link>
        </Button>
        <Alert>
          <IconAccessibility color="brand" size="xl" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
        <IconAccessibility color="brand" size="xl" />
        <IconMail color="danger" size="sm" />
        <IconMailCheck color="warning" size="xs" />
        <IconMailCheck color="default" size="xs" />
      </div>
    </main>
  );
}
