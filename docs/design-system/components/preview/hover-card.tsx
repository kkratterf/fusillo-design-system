// Import core
// Import customs
import Preview from '@docs/components/preview/preview';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@design-system/components/avatar';
import { Button } from '@design-system/components/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@design-system/components/hover-card';

export const HoverCardPreview = () => (
  <Preview>
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-md-semibold">@nextjs</p>
            <p className="text-md">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <span className="text-sm text-description">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  </Preview>
);
