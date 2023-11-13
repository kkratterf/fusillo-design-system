'use client';

import React from 'react';
import {
  Accessibility,
  CheckCircle,
  Loader,
  AlertTriangle,
  Bomb,
  ChevronsUpDown,
  Smile,
  Calculator,
  User,
  CreditCard,
  Settings,
  CalendarCheck,
  Cloud,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  UserPlus,
  Users,
} from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/sheet';
import { Button } from '@/components/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/accordion';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/alert-dialog';
import {
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
} from '@/components/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar';
import { Badge } from '@/components/badge';
import { Calendar } from '@/components/calendar';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from '@/components/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/card';
import { Checkbox } from '@/components/checkbox';
import { Label } from '@radix-ui/react-label';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/collapsible';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/command';
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/context-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog';
import { Input } from '@/components/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/tooltip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs';

import { useToast } from '@/components/toast/use-toast';
import { ToastAction } from '@/components/toast/toast';
import { Textarea } from '@/components/textarea';
import { Tag } from '@/components/tag';
import { Switch } from '@/components/switch';
import { Slider } from '@/components/slider';
import { Skeleton } from '@/components/skeleton';
import { Separator } from '@/components/separator';

export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isOpen, setIsOpen] = React.useState(false);
  const { toast } = useToast();
  return (
    <main className="bg-color-bg-layout flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-color-bg-layout space-y-4 z-10 max-w-5xl w-full items-center justify-between text-sm">
        <Select>
          <SelectTrigger className="w-[240px]">
            <SelectValue placeholder="Select a fruit" />
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
            <SelectSeparator></SelectSeparator>
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
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Asia</SelectLabel>
              <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
              <SelectItem value="ist">India Standard Time (IST)</SelectItem>
              <SelectItem value="cst_china">
                China Standard Time (CST)
              </SelectItem>
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
              <SelectItem value="nzst">
                New Zealand Standard Time (NZST)
              </SelectItem>
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
        <div className="grid grid-flow-col gap-4 auto-cols-max">
          <Tag status="default">Label</Tag>
          <Separator orientation="vertical" />
          <Tag status="default">Label</Tag>
          <Separator orientation="vertical" />
          <Tag status="default">Label</Tag>
          <Separator orientation="vertical" />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary">Open</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Separator />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Diocan</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Diocan</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Button title="Diocan" />
        <Button variant="secondary" title="Diocan" />
        <Button variant="text" title="Diocan" />
        <Button variant="link" title="Diocan" />
        <Button variant="danger" title="Diocan" />

        <Alert>
          <AlertIcon>
            <Accessibility />
          </AlertIcon>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
        <Alert status="danger">
          <AlertIcon>
            <Accessibility />
          </AlertIcon>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
        <Alert status="warning">
          <AlertIcon>
            <Accessibility />
          </AlertIcon>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
        <Alert status="success">
          <AlertIcon>
            <Accessibility />
          </AlertIcon>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
        <Alert status="info">
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
        <Alert status="discovery">
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            Dai su diomerda perchè non funziona
          </AlertDescription>
        </Alert>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="secondary">Show Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Avatar size="md">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Badge>Lorem</Badge>
        <Card>
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </Card>
        <Badge status="default">Label</Badge>
        <Badge status="danger">
          <Bomb />
          Error
        </Badge>
        <Badge status="warning">
          <AlertTriangle />
          Warning
        </Badge>
        <Badge status="success">
          <CheckCircle />
        </Badge>
        <Badge status="info">
          <Loader />
          Loading
        </Badge>
        <Badge status="discovery">Discovery</Badge>
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent>
            <Checkbox />
          </CardContent>
          <CardFooter>
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">Deploy</Button>
          </CardFooter>
        </Card>
        <div className="flex items-center gap-1">
          <Checkbox />
          <Label>Accept terms and conditions</Label>
        </div>
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-[350px] space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">
              @peduarte starred 3 repositories
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="text" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border border-color-border-primary px-4 py-3 font-mono text-sm">
            @radix-ui/primitives
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border border-color-border-primary px-4 py-3 font-mono text-sm">
              @radix-ui/colors
            </div>
            <div className="rounded-md border border-color-border-primary px-4 py-3 font-mono text-sm">
              @stitches/react
            </div>
          </CollapsibleContent>
        </Collapsible>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary">Hover</Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuItem inset>
              Back
              <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem inset disabled>
              Forward
              <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem inset>
              Reload
              <ContextMenuShortcut>⌘R</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem>
                  Save Page As...
                  <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                <ContextMenuItem>Name Window...</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem checked>
              Show Bookmarks Bar
              <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuRadioGroup value="pedro">
              <ContextMenuLabel inset>People</ContextMenuLabel>
              <ContextMenuRadioItem value="pedro">
                Pedro Duarte
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="colm">
                Colm Tuite
              </ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuContent>
        </ContextMenu>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary">Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Keyboard className="mr-2 h-4 w-4" />
                <span>Keyboard shortcuts</span>
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Users className="mr-2 h-4 w-4" />
                <span>Team</span>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <UserPlus className="mr-2 h-4 w-4" />
                  <span>Invite users</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>Message</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      <span>More...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                <Plus className="mr-2 h-4 w-4" />
                <span>New Team</span>
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Github className="mr-2 h-4 w-4" />
              <span>GitHub</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LifeBuoy className="mr-2 h-4 w-4" />
              <span>Support</span>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <Cloud className="mr-2 h-4 w-4" />
              <span>API</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary">Hover</Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary">Hover</Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary">Hover</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>Prova</TooltipTrigger>
            <TooltipContent side="top" sideOffset={16}>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>Prova</TooltipTrigger>
            <TooltipContent side="left" sideOffset={16}>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Prova</Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Prova</Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="w-20 h-20 m-20 p-20">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>Prova</TooltipTrigger>
              <TooltipContent side="right">
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>Prova</TooltipTrigger>
              <TooltipContent side="top">
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>Prova</TooltipTrigger>
              <TooltipContent style="outline" side="bottom">
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>Prova</Button>
              </TooltipTrigger>
              <TooltipContent style="fill" side="right">
                <p>Add to library</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Button
          onClick={() => {
            toast({
              title: 'Scheduled: Catch up',
              description: 'Friday, February 10, 2023 at 5:57 PM',
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
          }}
        >
          Show Toast
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            toast({
              status: 'danger',
              title: 'Uh oh! Something went wrong.',
              description: 'There was a problem with your request.',
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
          }}
        >
          Show Toast
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            toast({
              status: 'warning',
              title: 'Uh oh! Something went wrong.',
              description: 'There was a problem with your request.',
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
          }}
        >
          Show Toast
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            toast({
              status: 'success',
              title: 'Uh oh! Something went wrong.',
              description: 'There was a problem with your request.',
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
          }}
        >
          Show Toast
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            toast({
              status: 'info',
              title: 'Uh oh! Something went wrong.',
              description: 'There was a problem with your request.',
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
          }}
        >
          Show Toast
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            toast({
              status: 'discovery',
              title: 'Uh oh! Something went wrong.',
              description: 'There was a problem with your request.',
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
          }}
        >
          Show Toast
        </Button>
        <Textarea placeholder="Type your message here." />
        <div className="flex items-center space-x-2">
          <Tag status="default">Label</Tag>
          <Separator orientation="vertical" />
          <Tag status="danger">
            <Bomb />
            Error
          </Tag>
          <Separator orientation="vertical" />
          <Tag status="warning">
            <AlertTriangle />
            Warning
          </Tag>
          <Separator orientation="vertical" />
          <Tag status="success">
            <CheckCircle />
          </Tag>
          <Separator orientation="vertical" />
          <Tag status="info">
            <Loader />
            Loading
          </Tag>
          <Separator orientation="vertical" />
          <Tag status="discovery">Discovery</Tag>
        </div>
        <Tabs defaultValue="account" className="w-full">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
        <Switch />
        <Slider defaultValue={[33, 88]} max={100} />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton shape="line" />
        <Skeleton shape="circle" />
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
        <Select>
          <SelectTrigger className="w-[240px]">
            <SelectValue placeholder="Select a fruit" />
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
            <SelectSeparator></SelectSeparator>
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
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Asia</SelectLabel>
              <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
              <SelectItem value="ist">India Standard Time (IST)</SelectItem>
              <SelectItem value="cst_china">
                China Standard Time (CST)
              </SelectItem>
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
              <SelectItem value="nzst">
                New Zealand Standard Time (NZST)
              </SelectItem>
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
      </div>
    </main>
  );
}
