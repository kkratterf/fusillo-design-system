// Import core
import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { User, Lock } from 'lucide-react';
// Import customs
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/card';


const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'radio',
      options: ['account', 'password'],
      description:
        'Define the tab opened by default',
      table: {
        type: { summary: null },
      },
    },
    asChild: { table: { disable: true } },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=540%3A8882&mode=design&t=7r34RfU06jHXNJDx-1',
    },
  },
};
export default meta;

type TabsCustomProps = {
  defaultValue?: string;
  disabled?: boolean;
};

type Story = StoryObj<TabsCustomProps>;

export const Default: Story = {
  render: (args) => (
    <Tabs defaultValue={args.defaultValue} className="max-w-[400px]">
      <TabsList className="w-full">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password" disabled={args.disabled}>Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="w-full space-y-4">
        <div className='space-y-2 mt-2'>
          <div className="space-y-2">
            <p className="text-title-subsection">Account</p>
            <p className="text-md text-description">
              Make changes to your account here. Click save when you&apos;re
              done.
            </p>
          </div>
          <div className="grid gap-2 py-4">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Michael Scott" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@mscott" />
            </div>
          </div>
        </div>
        <div className="flex">
          <Button>Save</Button>
        </div>
      </TabsContent>
      <TabsContent value="password" className="w-full space-y-4">
        <div className='space-y-2 mt-2'>
          <div className="space-y-2">
            <p className="text-title-subsection">Password</p>
            <p className="text-md text-description">
              Change your password here. After saving, you&apos;ll be logged out.
            </p>
          </div>
          <div className="grid gap-2 py-4">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </div>
        </div>
        <div className="flex">
          <Button>Save</Button>
        </div>
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: 'account',
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description:
        'Prevent user actions when certain conditions are not met.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: null },
      },
    },
  },
};

export const DefaultValue: Story = {
  render: (args) => (
    <Tabs defaultValue={args.defaultValue} className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password" disabled={args.disabled}>
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: 'password',
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Tabs defaultValue={args.defaultValue} className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password" disabled={args.disabled}>
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: 'account',
    disabled: true,
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <Tabs defaultValue={args.defaultValue} className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">
          <User />
          Account
        </TabsTrigger>
        <TabsTrigger value="password" disabled={args.disabled}>
          <Lock />
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: 'account',
    disabled: false,
  },
};

export const WithCard: Story = {
  render: (args) => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="w-full">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you&apos;re done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Michael Scott" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@mscott" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: 'account',
  },
};
