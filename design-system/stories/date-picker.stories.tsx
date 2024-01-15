// Import core
import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { addDays, format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';
// Import customs
import { cn } from '@/lib/twMerge';
import { Button } from '@/components/button';
import { Calendar } from '@/components/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover';
import { DatePicker } from '@/components/date-picker';

const DatePickerDemo = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'secondary'}
          className={cn(
            'w-72 justify-start text-left font-normal',
            !date && 'text-description'
          )}
        >
          <CalendarIcon />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

const DatePickerWithRange = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'secondary'}
            className={cn(
              'w-[320px] justify-start text-left font-normal',
              !date && 'text-description'
            )}
          >
            <CalendarIcon/>
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} -{' '}
                  {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

const meta: Meta<typeof DatePicker> = {
  title: 'Components/Date Picker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A date time picker allows the user to select an associated date and time.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%8D%9D-Fusillo-Design-System?type=design&node-id=540%3A8862&mode=design&t=WFdj0huEcHgBPdYp-1',
    },
  },
};
export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: () => <DatePickerDemo />,
  args: {},
};

export const DateRangePicker: Story = {
  render: () => <DatePickerWithRange />,
  args: {},
};
