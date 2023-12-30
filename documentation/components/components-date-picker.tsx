"use client"

// Import core
// Import customs
import Preview from '@/docs/components/preview';
import * as React from "react"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import { cn } from "design-system/lib/twMerge"
import { Button } from "design-system/components/button"
import { Calendar } from "design-system/components/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "design-system/components/popover"

export const DatePickerPreview = () => {
  const [date, setDate] = React.useState(new Date());
  return (
  <Preview>
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"secondary"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-description"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          className="calendar-fix"
        />
      </PopoverContent>
    </Popover>
  </Preview>
  );
};

export function DateRangePicker() {
  const [date, setDate] = React.useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20)
});
 
  return (
    <Preview>
    <div className={cn("grid gap-2")}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"secondary"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-description"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
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
            className="calendar-fix"
          />
        </PopoverContent>
      </Popover>
    </div>
    </Preview>
  )


}
