import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '../../lib/utils';

const lozengeVariants = cva(
  'inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap shrink-0 transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-(--color-bg-subtle) text-(--color-text-secondary)',
        progress: 'bg-(--color-accent-subtle) text-(--color-accent-text)',
        success: 'bg-(--color-success-subtle) text-(--color-success)',
        danger: 'bg-(--color-danger-subtle) text-(--color-danger)',
        highlight: 'bg-(--color-accent) text-(--color-accent-on)',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface LozengeProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof lozengeVariants> {}

export function Lozenge({ className, variant, children, ...props }: LozengeProps) {
  return (
    <span className={cn(lozengeVariants({ variant }), className)} {...props}>
      {children}
    </span>
  );
}

export default Lozenge;
