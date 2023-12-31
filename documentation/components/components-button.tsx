// Import core
import { Download, Search } from 'lucide-react';
import Link from 'next/link';
// Import customs
import Preview from '@/docs/components/preview';
import { Button } from 'design-system/components/button';

export const ButtonPreview = () => (
  <Preview>
    <Button>Button</Button>
  </Preview>
);

export const ButtonPrimary = () => (
  <Preview>
    <Button>Primary</Button>
  </Preview>
);

export const ButtonSecondary = () => (
  <Preview>
    <Button variant="secondary">Secondary</Button>
  </Preview>
);

export const ButtonText = () => (
  <Preview>
    <Button variant="text">Text</Button>
  </Preview>
);

export const ButtonLink = () => (
  <Preview>
    <Button variant="link">Link</Button>
  </Preview>
);

export const ButtonDanger = () => (
  <Preview>
    <Button variant="danger">Danger</Button>
  </Preview>
);

export const ButtonWithIcon = () => (
  <Preview>
    <Button variant="primary">
      <Download />
      Download
    </Button>
  </Preview>
);

export const ButtonIcon = () => (
  <Preview>
    <Button variant="secondary" icon={true}>
      <Search />
    </Button>
  </Preview>
);

export const ButtonAsChild = () => (
  <Preview>
    <Button variant="secondary" asChild>
      <Link href="/login">Login</Link>
    </Button>
  </Preview>
);


