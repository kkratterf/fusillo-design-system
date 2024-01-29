"use client"

// Import core
import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
// Import customs
import { cn } from '@/lib/twMerge';
import { buttonVariants } from '@/components/button';
import './calendar.css';

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('calendar-component', className)}
      classNames={{
        months: 'calendar-months',
        month: 'calendar-month',
        caption: 'calendar-caption',
        caption_label: 'calendar-caption-label',
        nav: 'calendar-nav',
        nav_button: cn(
          buttonVariants({ variant: 'secondary' }),
          'calendar-nav-button'
        ),
        nav_button_previous: 'calendar-nav-button-previus',
        nav_button_next: 'calendar-nav-button-next',
        table: 'calendar-table',
        head_row: 'calendar-header-row',
        head_cell:
          'calendar-header-cell',
        row: 'calendar-row',
        cell: 'calendar-cell',
        day: cn(
          buttonVariants({ variant: 'text' }),
          'calendar-day'
        ),
        day_selected:
          'calendar-day-selected',
        day_today: 'calendar-day-today',
        day_outside: 'calendar-day-outside',
        day_disabled: 'calendar-day-disabled',
        day_range_middle:
          'calendar-day-range-middle',
        day_hidden: 'calendar-day-hidden',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar"

export { Calendar }
