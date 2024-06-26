"use client"

// Import core
import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
// Import customs
import Preview from '@docs/components/preview/preview';
import { Calendar } from "@design-system/components/calendar"
import { cn } from '@design-system/lib/twMerge';
import { Button } from '@design-system/components/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@design-system/components/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@design-system/components/popover';
import { toast } from '@design-system/components/toast/use-toast';

const FormSchema = z.object({
  dob: z.date({
    required_error: 'A date of birth is required.',
  }),
});

const CalendarForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded bg-subtle border border-default p-4">
          <code className="text">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'secondary'}
                      className={cn(
                        'w-60 pl-3 text-left font-normal',
                        !field.value && 'text-placeholder'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-disabled" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                    className="calendar-fix"
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export const CalendarPreview = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
  <Preview>
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded border border-default calendar-fix"
    />
  </Preview>
  );
};

export const CalendarWithForm = () => (
  <Preview>
    <CalendarForm />
  </Preview>
);