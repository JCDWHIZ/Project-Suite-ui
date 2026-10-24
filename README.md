# Project Suite UI

The shared React component package for Zeal and QAForge. It is a Vite library with a small preview page for local development.

## Local use

```bash
pnpm install
pnpm build
```

Both applications can consume it as `@project-suite/ui` through a workspace, file dependency, or published registry package:

```tsx
import { Button, Card } from '@project-suite/ui';
import '@project-suite/ui/styles.css';
```

The exported styles contain the Zeal design tokens and dark-mode defaults. Consumers may override the CSS variables to apply a product-specific theme.
