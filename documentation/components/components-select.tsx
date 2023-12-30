// Import core
// Import customs
import { AccessibilityTable } from '@/docs/components/accessibility-table';
import Preview from '@/docs/components/preview';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from 'design-system/components/select';

export const SelectPreview = () => (
  <Preview>
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </Preview>
);

export const SelectScrollable = () => (
  <Preview>
    <Select>
      <SelectTrigger className="w-[360px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
          <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
          <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Europe & Africa</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value="cet">Central European Time (CET)</SelectItem>
          <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
          <SelectItem value="west">
            Western European Summer Time (WEST)
          </SelectItem>
          <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
          <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
          <SelectItem value="ist">India Standard Time (IST)</SelectItem>
          <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
          <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
          <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
          <SelectItem value="ist_indonesia">
            Indonesia Central Standard Time (WITA)
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Australia & Pacific</SelectLabel>
          <SelectItem value="awst">
            Australian Western Standard Time (AWST)
          </SelectItem>
          <SelectItem value="acst">
            Australian Central Standard Time (ACST)
          </SelectItem>
          <SelectItem value="aest">
            Australian Eastern Standard Time (AEST)
          </SelectItem>
          <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
          <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>South America</SelectLabel>
          <SelectItem value="art">Argentina Time (ART)</SelectItem>
          <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
          <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
          <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </Preview>
);

export const SelectWithForm = () => (
  <Preview>
    <SelectForm />
  </Preview>
);

export const SelectAccessibility = () => {
  const selectAccessibilityData = [
    {
      key: 'Space',
      description: (
        <>
          When focus is on{' '}
          <code className="cell-accessibility-code">SelectTrigger</code>, opens
          the select and focuses the selected item. When focus is on an item,
          selects the focused item.
        </>
      ),
    },
    {
      key: 'Enter',
      description: (
        <>
          When focus is on{' '}
          <code className="cell-accessibility-code">SelectTrigger</code>, opens
          the select and focuses the first item. When focus is on an item,
          selects the focused item.
        </>
      ),
    },
    {
      key: 'ArrowDown',
      description: (
        <>
          When focus is on{' '}
          <code className="cell-accessibility-code">SelectTrigger</code>, opens
          the select. When focus is on an item, moves focus to the next item.
        </>
      ),
    },
    {
      key: 'ArrowUp',
      description: (
        <>
          When focus is on{' '}
          <code className="cell-accessibility-code">SelectTrigger</code>, opens
          the select. When focus is on an item, moves focus to the previous
          item.
        </>
      ),
    },
    {
      key: 'Esc',
      description: (
        <>
          Closes the select and moves focus to{' '}
          <code className="cell-accessibility-code">SelectTrigger</code>.
        </>
      ),
    },
  ];
  return <AccessibilityTable rows={selectAccessibilityData} />;
};






'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from 'design-system/components/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'design-system/components/form';
import { toast } from 'design-system/components/toast/use-toast';

const FormSchema = z.object({
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
});

export function SelectForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                You can manage email addresses in your{' '}
                <Link href="/examples/forms">email settings</Link>.
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
