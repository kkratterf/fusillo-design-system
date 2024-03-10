// Import core
import { ComponentProps } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
// Import customs
import { cn } from '@design-system/lib/twMerge';
import { Tag } from '@design-system/components/tag';
import { ScrollArea } from '@design-system/components/scroll-area';
import { Mail } from '@app-example/app/data';
import { useMail } from '@app-example/app/use-mail';

interface MailListProps {
  items: Mail[];
}

export function MailList({ items }: MailListProps) {
  const [mail, setMail] = useMail();

  return (
    <ScrollArea className="h-[calc(100vh-68px-54px)]">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {items.map((item) => (
          <button
            key={item.id}
            className={cn(
              'flex flex-col items-start gap-2 rounded-lg border border-default p-3 text-left text-base transition-all hover:bg-item-hover',
              mail.selected === item.id && 'bg-item-selected'
            )}
            onClick={() =>
              setMail({
                ...mail,
                selected: item.id,
              })
            }
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{item.name}</div>
                  {!item.read && (
                    <span className="flex h-2 w-2 rounded-full bg-brand" />
                  )}
                </div>
                <div
                  className={cn(
                    'ml-auto text-sm',
                    mail.selected === item.id ? 'text' : 'text-description'
                  )}
                >
                  {formatDistanceToNow(new Date(item.date), {
                    addSuffix: true,
                  })}
                </div>
              </div>
              <div className="text-sm font-medium">{item.subject}</div>
            </div>
            <div className="line-clamp-2 text-sm text-description">
              {item.text.substring(0, 300)}
            </div>
            {item.labels.length ? (
              <div className="flex items-center gap-1">
                {item.labels.map((label) => (
                  <Tag key={label} status={getTagVariantFromLabel(label)}>
                    {label}
                  </Tag>
                ))}
              </div>
            ) : null}
          </button>
        ))}
      </div>
    </ScrollArea>
  );
}

function getTagVariantFromLabel(
  label: string
): ComponentProps<typeof Tag>['status'] {
  if (['work'].includes(label.toLowerCase())) {
    return 'warning';
  }

  if (['important'].includes(label.toLowerCase())) {
    return 'danger';
  }

  if (['personal'].includes(label.toLowerCase())) {
    return 'brand';
  }

  return 'default';
}
