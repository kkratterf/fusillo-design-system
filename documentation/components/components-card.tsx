// Import core
import { BellRing, Check } from 'lucide-react';
// Import customs
import Preview from '@/docs/components/preview';
import { cn } from 'design-system/lib/twMerge';
import { Switch } from 'design-system/components/switch';
import { Button } from 'design-system/components/button';
import { Input } from 'design-system/components/input';
import { Label } from 'design-system/components/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'design-system/components/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'design-system/components/card';


const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
];

type CardProps = React.ComponentProps<typeof Card>;

const CardDemo = ({ className, ...props }: CardProps) => {
  return (
    <Card className={cn('w-[460px]', className)} {...props}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-md-medium leading-none">Push Notifications</p>
            <p className="text-md text-description">
              Send notifications to device.
            </p>
          </div>
          <Switch />
        </div>
        <div className="p-4">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-2 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-brand" />
              <div className="space-y-1">
                <p className="text-md-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-md text-description">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  );
}


export const CardPreview = () => (
  <Preview>
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-3">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="secondary">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  </Preview>
);

export const CardWithMapping = () => (
  <Preview>
    <CardDemo />
  </Preview>
);