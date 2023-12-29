// Import core
// Import customs
import { AccessibilityTable } from '@/docs/components/accessibility-table';
import Preview from '@/docs/components/preview';
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
} from 'design-system/components/alert-dialog';
import { Button } from 'design-system/components/button';

export const AlertDialogPreview = () => (
  <Preview>
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">Delete account</Button>
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
  </Preview>
);

export const AlertDialogDefault = () => (
  <Preview>
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">Delete account</Button>
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
  </Preview>
);

export const AlertDialogAccessibility = () => {
  const alertDialogAccessibilityData = [
    {
      key: 'Space',
      description: 'Opens/closes the dialog.',
    },
    {
      key: 'Enter',
      description: 'Opens/closes the dialog.',
    },
    {
      key: 'Tab',
      description: 'Moves focus to the next focusable element.',
    },
    {
      key: 'Shit+Tab',
      description: 'Moves focus to the previous focusable element.',
    },
    {
      key: 'Esc',
      description: (
        <>
          Closes the dialog and moves focus to{' '}
          <code className="cell-accessibility-code">AlertDialogTrigger</code>
        </>
      ),
    },
  ];
  return <AccessibilityTable rows={alertDialogAccessibilityData} />;
};
