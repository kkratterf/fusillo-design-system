'use client';

// Import core
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
// Import customs
import Preview from '@/docs/components/preview';
import { Input } from 'design-system/components/input';
import { Label } from 'design-system/components/label';
import { Button } from 'design-system/components/button';
import { toast } from 'design-system/components/toast/use-toast';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'design-system/components/form';


const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

const InputFormDemo = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded bg-subtle border border-border p-4">
          <code className="text">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[340px] space-y-6"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="@mscott" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};


export const InputPreview = () => (
  <Preview>
    <Input type="email" placeholder="Email" className="w-80" />
  </Preview>
);

export const InputFile = () => (
  <Preview>
    <Input type="file" className="w-80" />
  </Preview>
);

export const InputDisabled = () => (
  <Preview>
    <Input placeholder="Email" disabled className="w-80" />
  </Preview>
);

export const InputWithLabel = () => (
  <Preview>
    <div className="grid w-80 max-w-sm items-center gap-3">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  </Preview>
);

export const InputWithButton = () => (
  <Preview>
    <div className="flex w-80 max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  </Preview>
);

export const InputWithForm = () => (
  <Preview>
    <InputFormDemo />
  </Preview>
);
