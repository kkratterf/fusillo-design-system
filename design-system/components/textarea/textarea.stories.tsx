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

const  TextareaFormDemo = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-radius bg-color-bg-container-subtle border border-color-border-primary p-4">
          <code className="text-color-text">
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
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}


const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {},
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
    placeholder: 'Type your message here.',
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
      <Label htmlFor="message-2">Your Message</Label>
      <Textarea {...args} id="message-2" />
      <p className="body-base text-color-text-description">
        Your message will be copied to the support team.
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
