import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import * as React from 'react';

import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full border border-transparent px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-(--color-accent-subtle) text-(--color-accent-text)',
        secondary: 'bg-(--color-bg-subtle) text-(--color-text-secondary)',
        destructive: 'bg-(--color-danger-subtle) text-(--color-danger)',
        outline: 'border border-(--color-border) text-(--color-text-primary)',
        ghost: 'text-(--color-text-secondary) hover:bg-(--color-bg-subtle)',
        link: 'text-(--color-accent-text) underline-offset-4 hover:underline',
        warning: 'bg-(--color-warning-subtle) text-(--color-warning)',
        success: 'bg-(--color-success-subtle) text-(--color-success)',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function Badge({
  className,
  variant = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : 'span';

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge };
