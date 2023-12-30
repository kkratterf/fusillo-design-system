// Import core
// Import customs
import { AccessibilityTable } from '@/docs/components/accessibility-table';
import Preview from '@/docs/components/preview';
import { Label } from 'design-system/components/label';
import {
  RadioGroup,
  RadioGroupItem,
} from 'design-system/components/radio-group';

export const RadioGroupPreview = () => (
  <Preview>
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  </Preview>
);

export const RadioGroupDefault = () => (
  <Preview>
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  </Preview>
);

export const RadioGroupWithForm = () => (
  <Preview>
    <RadioGroupForm />
  </Preview>
);

export const RadioGroupAccessibility = () => {
  const radioGroupAccessibilityData = [
    {
      key: 'Tab',
      description:
        'Moves focus to either the checked radio item or the first radio item in the group.',
    },
    {
      key: 'Space',
      description: 'When focus is on an unchecked radio item, checks it.',
    },
    {
      key: 'ArrowDown',
      description: 'Moves focus and checks the next radio item in the group.',
    },
    {
      key: 'ArrowRight',
      description: 'Moves focus and checks the next radio item in the group.',
    },
    {
      key: 'ArrowUp',
      description: 'Moves focus to the previous radio item in the group.',
    },
    {
      key: 'ArrowLeft',
      description: 'Moves focus to the previous radio item in the group.',
    },
  ];
  return <AccessibilityTable rows={radioGroupAccessibilityData} />;
};






'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from 'design-system/components/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'design-system/components/form';

import { toast } from 'design-system/components/toast/use-toast';

const FormSchema = z.object({
  type: z.enum(['all', 'mentions', 'none'], {
    required_error: 'You need to select a notification type.',
  }),
});

export function RadioGroupForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded bg-subtle border border p-4">
          <code className="text">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Notify me about...</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      All new messages
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="mentions" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Direct messages and mentions
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel className="font-normal">Nothing</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}