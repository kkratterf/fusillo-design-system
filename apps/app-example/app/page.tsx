// Import core
import { cookies } from 'next/headers';
// Import customs
import { Mail } from '@app-example/components/mail';
import { accounts, mails } from '@app-example/app/data';

export default function Home() {
  const layout = cookies().get('react-resizable-panels:layout');
  const collapsed = cookies().get('react-resizable-panels:collapsed');

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;
  return (
    <main className="flex flex-col">
      <Mail
        accounts={accounts}
        mails={mails}
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        navCollapsedSize={4}
      />
    </main>
  );
}
