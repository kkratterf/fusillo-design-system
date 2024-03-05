'use client';

// Import core
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
// Import customs
import Preview from '@docs/components/preview/preview';
import { Textarea } from '@design-system/components/textarea';
import { Label } from '@design-system/components/label';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@design-system/components/form';
import { Button } from '@design-system/components/button';
import { Input } from '@design-system/components/input';
import { toast } from '@design-system/components/toast/use-toast';


const FormSchema = z.object({
  bio: z
    .string()
    .min(10, {
      message: 'Bio must be at least 10 characters.',
    })
    .max(160, {
      message: 'Bio must not be longer than 30 characters.',
    }),
});

const TextareaFormDemo = () => {
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-10"
      >
        <div className="space-y-6">
          <FormItem className="space-y-2">
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input value="Michael Scott" />
            </FormControl>
            <FormMessage />
          </FormItem>
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Once upon a time..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  You can <span>@mention</span> other users and organizations.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}


export const TextareaPreview = () => (
  <Preview>
    <Textarea placeholder="Once upon a time..." />
  </Preview>
);

export const TextareaDisabled = () => (
  <Preview>
    <Textarea placeholder="Once upon a time..." disabled />
  </Preview>
);

export const TextareaWithText = () => (
  <Preview>
    <div className="grid w-full gap-3">
      <Label htmlFor="message">Bio</Label>
      <Textarea placeholder="Once upon a time..." id="message" />
      <span className="text-md text-description">
        You can @mention other users and organizations.
      </span>
    </div>
  </Preview>
);

export const TextareaWithForm = () => (
  <Preview>
    <TextareaFormDemo />
  </Preview>
);
