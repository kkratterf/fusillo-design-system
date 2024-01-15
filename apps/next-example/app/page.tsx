import { Button } from 'design-system/components/button'
import { Alert, AlertIcon, AlertDescription, AlertTitle } from "design-system/components/alert"
import { Megaphone } from "lucide-react" 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant="primary">Hello</Button>
      <Button variant="secondary">Hello</Button>
      <Button variant="danger">Danger</Button>
      <Alert>
        <AlertIcon>
          <Megaphone />
        </AlertIcon>
        <AlertTitle> Notice </AlertTitle>
        <AlertDescription>
          This is a general notification for your attention. It provides neutral
          information or basic reminders for everyday tasks.
        </AlertDescription>
      </Alert>
      <div className="h-10 w-10 bg-brand"></div>
      <p className='text-md'>Vamos pedro</p>
    </main>
  );
}
