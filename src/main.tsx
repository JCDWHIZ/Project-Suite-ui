import { createRoot } from 'react-dom/client';

import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from './index';

createRoot(document.getElementById('root')!).render(
  <main className="min-h-screen bg-(--color-bg-page) p-8 text-(--color-text-primary)">
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <Badge>Shared UI</Badge>
        <CardTitle>Project Suite components</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-3">
        <Button>Primary action</Button>
        <Button variant="outline">Secondary</Button>
      </CardContent>
    </Card>
  </main>
);
