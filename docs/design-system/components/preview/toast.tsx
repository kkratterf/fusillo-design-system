// Import core
// Import customs
import Preview from '@docs/components/preview/preview';
import { Button } from '@design-system/components/button';
import { useToast } from '@design-system/components/toast/use-toast';

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

export const ToastBrand = () => {
  const { toast } = useToast();
  return (
    <Preview>
      <Button
        variant="secondary"
        onClick={() => {
          toast({
            status: 'brand',
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