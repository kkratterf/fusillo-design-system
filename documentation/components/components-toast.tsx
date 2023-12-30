// Import core
// Import customs
import { AccessibilityTable } from '@/docs/components/accessibility-table';
import Preview from '@/docs/components/preview';
import { Button } from 'design-system/components/button';
import { useToast } from 'design-system/components/toast/use-toast';

export const ToastPreview = () => {
  const { toast } = useToast();
  return (
    <Preview>
      <Button
        variant="secondary"
        onClick={() => {
          toast({
            description: 'Your message has been sent.',
          });
        }}
      >
        Show Toast
      </Button>
    </Preview>
  );
};

export const ToastSimple = () => {
  const { toast } = useToast();
  return (
    <Preview>
      <Button
        variant="secondary"
        onClick={() => {
          toast({
            description: 'Your message has been sent.',
          });
        }}
      >
        Show Toast
      </Button>
    </Preview>
  );
};

export const ToastWithTitle = () => {
  const { toast } = useToast();
  return (
    <Preview>
      <Button
        variant="secondary"
        onClick={() => {
          toast({
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
          });
        }}
      >
        Show Toast
      </Button>
    </Preview>
  );
};

export const ToastWithAction = () => {
  const { toast } = useToast();
  return (
    <Preview>
      <Button
        variant="secondary"
        onClick={() => {
          toast({
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
            action: 'Try again',
          });
        }}
      >
        Show Toast
      </Button>
    </Preview>
  );
};

export const ToastDanger = () => {
  const { toast } = useToast();
  return (
    <Preview>
      <Button
        variant="secondary"
        onClick={() => {
          toast({
            status: 'danger',
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
            action: 'Try again',
          });
        }}
      >
        Show Toast
      </Button>
    </Preview>
  );
};

export const ToastWarning = () => {
  const { toast } = useToast();
  return (
    <Preview>
      <Button
        variant="secondary"
        onClick={() => {
          toast({
            status: 'warning',
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
            action: 'Try again',
          });
        }}
      >
        Show Toast
      </Button>
    </Preview>
  );
};

export const ToastAccessibility = () => {
  const toastAccessibilityData = [
    {
      key: 'F8',
      description: 'Focuses toasts viewport.',
    },
    {
      key: 'Tab',
      description: 'Moves focus to the next focusable element.',
    },
    {
      key: 'Shift+Tab',
      description:
        'When focus is on a Toast.Action or Toast.Close, closes the toast.',
    },
    {
      key: 'Space',
      description: (
        <>
          When focus is on a{' '}
          <code className="cell-accessibility-code">ToastAction</code> or{' '}
          <code className="cell-accessibility-code">ToastClose</code>, closes
          the toast.
        </>
      ),
    },
    {
      key: 'Enter',
      description: (
        <>
          When focus is on a{' '}
          <code className="cell-accessibility-code">ToastAction</code> or{' '}
          <code className="cell-accessibility-code">ToastClose</code>, closes
          the toast.
        </>
      ),
    },
    {
      key: 'Esc',
      description: (
        <>
          When focus is on a{' '}
          <code className="cell-accessibility-code">Toast</code>, closes the
          toast.
        </>
      ),
    },
  ];
  return <AccessibilityTable rows={toastAccessibilityData} />;
};
