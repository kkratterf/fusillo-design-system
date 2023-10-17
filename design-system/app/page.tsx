import { IconAccessibility, IconMail, IconMailCheck } from '@/components/icon';
import { Button } from '@/components/button';
import { Theme } from '@/components/theme';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="space-y-4 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Theme theme="dark">
          <Button>Cambia Tema</Button>
        </Theme>
        <Theme theme="light">
          <Button>Prova</Button>
        </Theme>
        <Theme>
          <Button>Prova</Button>
        </Theme>
        <IconAccessibility color="brand" size="xl" />
        <IconMail color="danger" size="sm" />
        <IconMailCheck color="warning" size="xs" />
        <IconMailCheck color="default" size="xs" />
      </div>
    </main>
  );
}
