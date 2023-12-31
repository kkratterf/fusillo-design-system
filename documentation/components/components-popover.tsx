// Import core
// Import customs
import Preview from '@/docs/components/preview';
import { Button } from 'design-system/components/button';
import { Input } from 'design-system/components/input';
import { Label } from 'design-system/components/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'design-system/components/popover';

export const PopoverPreview = () => (
  <Preview>
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="col-span-2" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  </Preview>
);