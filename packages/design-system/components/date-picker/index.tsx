'use client';

// Import core
import * as React from 'react';
// Import third parts
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
// Import customs
import { cn } from '../../lib/twMerge';
import { Button } from '../button';
import { Calendar } from '../calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../popover';
import './date-picker.css';

export function DatePicker() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'secondary'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-description'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
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
DatePicker.displayName = 'DatePicker';
