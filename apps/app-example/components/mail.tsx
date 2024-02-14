'use client';

// Import core
import * as React from 'react';
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  PenBox,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from 'lucide-react';
// Import customs
import { AccountSwitcher } from '@app-example/components/account-switcher';
import { MailDisplay } from '@app-example/components/mail-display';
import { MailList } from '@app-example/components/mail-list';
import { Nav } from '@app-example/components/nav';
import { Mail } from '@app-example/app/data';
import { useMail } from '@app-example/app/use-mail';
import { cn } from '@design-system/lib/twMerge';
import { Separator } from '@design-system/components/separator';
import { Input } from '@design-system/components/input';
import {
  Segmented,
  SegmentedContent,
  SegmentedList,
  SegmentedTrigger,
} from '@design-system/components/segmented';
import { TooltipProvider } from '@design-system/components/tooltip';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@design-system/components/resizable';

interface MailProps {
  accounts: {
    label: string;
    email: string;
    icon: React.ReactNode;
  }[];
  mails: Mail[];
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

export function Mail({
  accounts,
  mails,
  defaultLayout = [265, 440, 655],
  defaultCollapsed = false,
  navCollapsedSize,
}: MailProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  const [mail] = useMail();

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`;
        }}
        className="max-h-screen h-screen items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={(collapsed) => {
            setIsCollapsed(collapsed);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              collapsed
            )}`;
          }}
          className={cn(
            isCollapsed &&
              'min-w-[50px] transition-all duration-300 ease-in-out'
          )}
        >
          <div
            className={cn(
              'flex h-[52px] items-center justify-center',
              isCollapsed ? 'h-[52px]' : 'px-2'
            )}
          >
            <AccountSwitcher isCollapsed={isCollapsed} accounts={accounts} />
          </div>
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: 'Inbox',
                label: '128',
                icon: Inbox,
                variant: 'default',
              },
              {
                title: 'Drafts',
                label: '9',
                icon: File,
                variant: 'text',
              },
              {
                title: 'Sent',
                label: '',
                icon: Send,
                variant: 'text',
              },
              {
                title: 'Junk',
                label: '23',
                icon: ArchiveX,
                variant: 'text',
              },
              {
                title: 'Trash',
                label: '',
                icon: Trash2,
                variant: 'text',
              },
              {
                title: 'Archive',
                label: '',
                icon: Archive,
                variant: 'text',
              },
            ]}
          />
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: 'Social',
                label: '972',
                icon: Users2,
                variant: 'text',
              },
              {
                title: 'Updates',
                label: '342',
                icon: AlertCircle,
                variant: 'text',
              },
              {
                title: 'Forums',
                label: '128',
                icon: MessagesSquare,
                variant: 'text',
              },
              {
                title: 'Shopping',
                label: '8',
                icon: ShoppingCart,
                variant: 'text',
              },
              {
                title: 'Promotions',
                label: '21',
                icon: Archive,
                variant: 'text',
              },
            ]}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <Segmented defaultValue="all">
            <div className="flex items-center px-4 py-2">
              <h1 className="text-title-body">Inbox</h1>
              <SegmentedList className="ml-auto">
                <SegmentedTrigger value="all">All mail</SegmentedTrigger>
                <SegmentedTrigger value="unread">Unread</SegmentedTrigger>
              </SegmentedList>
            </div>
            <Separator />
            <div className="bg-background p-4">
              <form>
                <div className="relative">
                  <Input placeholder="Search" />
                </div>
              </form>
            </div>
            <SegmentedContent value="all" className="m-0">
              <MailList items={mails} />
            </SegmentedContent>
            <SegmentedContent value="unread" className="m-0">
              <MailList items={mails.filter((item) => !item.read)} />
            </SegmentedContent>
          </Segmented>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[2]}>
          <MailDisplay
            mail={mails.find((item) => item.id === mail.selected) || null}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
