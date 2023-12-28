'use client';

// Import core
import { Meta, StoryObj } from '@storybook/react';
// Import third parts
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
// Import customs
import { Button } from '../button';
import { Label } from '../label';
import { Textarea } from './';
import { Input } from '../input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../form';
import { Toaster } from '../toast';
import { toast } from '../toast/use-toast';


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

const TextareaFormDemo = (args: any) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded bg-subtle border border p-4">
          <code className="text">
            {JSON.stringify(data, null, 2)}
          </code>
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
        <div className='space-y-6'>
              <FormItem className="space-y-3">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input value="Micheal Scott"/>
                </FormControl>
              </FormItem>
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={args.placeholder}
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


const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      description:
        'Set the `placeholder` property to guide users in filling the textarea',
    },
    disabled: {
      control: 'boolean',
      description:
        'Use the `disabled` prop to prevent user actions when certain conditions are not met.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: null },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A text area lets users enter long form text which spans over multiple lines.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=540%3A8883&mode=design&t=ADS6PLdzJ7eQkKd7-1',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: (args) => <Textarea {...args} />,
  args: {
    placeholder: 'Once upon a time...',
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => <Textarea {...args} />,
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const WithText: Story = {
  render: (args) => (
    <div className="grid w-full gap-3">
      <Label htmlFor="message">Bio</Label>
      <Textarea {...args} id="message" />
      <p className="text-md text-description">
        You can @mention other users and organizations.
      </p>
    </div>
  ),
  args: { ...Default.args },
};

export const WithForm: Story = {
  render: (args) => (
    <div className="grid w-full gap-3">
      <TextareaFormDemo {...args} />
      <Toaster />
    </div>
  ),
  args: { ...Default.args },
};
