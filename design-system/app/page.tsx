'use client'

import { IconAccessibility } from '@/components/icon';
import { Button, IconButton } from '@/components/button';
import { useTheme } from '@/components/theme';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/accordion';

import { Alert, AlertIcon, AlertDescription, AlertTitle } from '@/components/alert';


export default function Home() {

  const theme = useTheme();

  return (
    <main
      className={`bg-color-bg-layout flex min-h-screen flex-col items-center justify-between p-24 ${
        theme === 'dark' ? 'dark' : 'light'
      }`}
    >
      <div className="bg-color-bg-layout space-y-4 z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
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

        <Accordion type="multiple">
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

        <Button title="Diocan" />
        <Button variant="secondary" title="Diocan" />
        <Button variant="text" title="Diocan" />
        <Button variant="link" title="Diocan" />
        <Button variant="danger" title="Diocan" />

        <IconButton icon={<IconAccessibility />}></IconButton>
        <IconButton
          variant="secondary"
          icon={<IconAccessibility />}
        ></IconButton>
        <IconButton variant="text" icon={<IconAccessibility />}></IconButton>
        <IconButton variant="link" icon={<IconAccessibility />}></IconButton>
        <IconButton variant="danger" icon={<IconAccessibility />}></IconButton>

        <Alert>
          <AlertIcon>
            <IconAccessibility />
          </AlertIcon>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
        <Alert variant="danger">
          <AlertIcon>
            <IconAccessibility />
          </AlertIcon>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
        <Alert variant="warning">
          <AlertIcon>
            <IconAccessibility />
          </AlertIcon>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
        <Alert variant="success">
          <AlertIcon>
            <IconAccessibility />
          </AlertIcon>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
        <Alert variant="info">
          <AlertIcon>
            <IconAccessibility />
          </AlertIcon>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
        <Alert variant="discovery">
          <AlertIcon>
            <IconAccessibility />
          </AlertIcon>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            Dai su diomerda perchè non funziona
          </AlertDescription>
        </Alert>
      </div>
    </main>
  );
}
