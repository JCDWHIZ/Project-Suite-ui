import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        default: '',
        outline: 'border border-(--color-border-strong) bg-transparent',
        ghost: 'bg-transparent hover:bg-(--color-accent-subtle)',
        soft: 'bg-(--color-accent-subtle) hover:bg-opacity-80',
        link: 'underline-offset-4 hover:underline bg-transparent p-0',
      },
      colorScheme: {
        primary: '',
        secondary: '',
        success: '',
        danger: '',
        warning: '',
        info: '',
        neutral: '',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        default: 'h-9 px-4 py-2 text-sm',
        lg: 'h-10 px-6 text-base',
        icon: 'h-9 w-9',
      },
    },
    compoundVariants: [
      // PRIMARY COLOR SCHEME (Waypoint Accent)
      {
        variant: 'default',
        colorScheme: 'primary',
        className:
          'bg-(--color-accent) text-(--color-accent-on) hover:bg-(--color-accent-hover) active:scale-[0.98] active:brightness-95 transition-all shadow-xs',
      },
      {
        variant: 'outline',
        colorScheme: 'primary',
        className:
          'border-(--color-border-strong) text-(--color-text-primary) hover:bg-(--color-bg-subtle) active:bg-(--color-border) active:scale-[0.98] transition-all',
      },
      {
        variant: 'ghost',
        colorScheme: 'primary',
        className:
          'text-(--color-accent-text) hover:bg-(--color-accent-subtle) active:bg-(--color-accent-muted) active:scale-[0.98] transition-all',
      },
      {
        variant: 'soft',
        colorScheme: 'primary',
        className:
          'bg-(--color-accent-subtle) text-(--color-accent-text) hover:bg-(--color-accent-muted) active:scale-[0.98] transition-all',
      },

      // SECONDARY COLOR SCHEME (Waypoint Subtly Filled Secondary Button)
      {
        variant: 'default',
        colorScheme: 'secondary',
        className:
          'bg-(--color-bg-subtle) text-(--color-text-primary) hover:bg-(--color-border) active:bg-(--color-border-strong)',
      },
      {
        variant: 'outline',
        colorScheme: 'secondary',
        className:
          'border-(--color-border) text-(--color-text-primary) hover:bg-(--color-bg-subtle)',
      },
      {
        variant: 'ghost',
        colorScheme: 'secondary',
        className: 'text-(--color-text-secondary) hover:bg-(--color-bg-subtle)',
      },
      {
        variant: 'soft',
        colorScheme: 'secondary',
        className: 'bg-(--color-bg-subtle) text-(--color-text-secondary) hover:bg-(--color-border)',
      },

      // SUCCESS COLOR SCHEME
      {
        variant: 'default',
        colorScheme: 'success',
        className: 'bg-(--color-success) text-white hover:opacity-90 active:opacity-100',
      },
      {
        variant: 'outline',
        colorScheme: 'success',
        className:
          'border-(--color-success) text-(--color-success) hover:bg-(--color-success-subtle)',
      },
      {
        variant: 'ghost',
        colorScheme: 'success',
        className: 'text-(--color-success) hover:bg-(--color-success-subtle)',
      },
      {
        variant: 'soft',
        colorScheme: 'success',
        className: 'bg-(--color-success-subtle) text-(--color-success) hover:opacity-80',
      },

      // DANGER COLOR SCHEME
      {
        variant: 'default',
        colorScheme: 'danger',
        className: 'bg-(--color-danger) text-white hover:opacity-90 active:opacity-100',
      },
      {
        variant: 'outline',
        colorScheme: 'danger',
        className: 'border-(--color-danger) text-(--color-danger) hover:bg-(--color-danger-subtle)',
      },
      {
        variant: 'ghost',
        colorScheme: 'danger',
        className: 'text-(--color-danger) hover:bg-(--color-danger-subtle)',
      },
      {
        variant: 'soft',
        colorScheme: 'danger',
        className: 'bg-(--color-danger-subtle) text-(--color-danger) hover:opacity-80',
      },

      // WARNING COLOR SCHEME
      {
        variant: 'default',
        colorScheme: 'warning',
        className: 'bg-(--color-warning) text-slate-950 hover:opacity-90 active:opacity-100',
      },
      {
        variant: 'outline',
        colorScheme: 'warning',
        className:
          'border-(--color-warning) text-(--color-warning) hover:bg-(--color-warning-subtle)',
      },
      {
        variant: 'ghost',
        colorScheme: 'warning',
        className: 'text-(--color-warning) hover:bg-(--color-warning-subtle)',
      },
      {
        variant: 'soft',
        colorScheme: 'warning',
        className: 'bg-(--color-warning-subtle) text-(--color-warning) hover:opacity-80',
      },

      // INFO COLOR SCHEME
      {
        variant: 'default',
        colorScheme: 'info',
        className: 'bg-(--color-info) text-white hover:opacity-90 active:opacity-100',
      },
      {
        variant: 'outline',
        colorScheme: 'info',
        className: 'border-(--color-info) text-(--color-info) hover:bg-(--color-info-subtle)',
      },
      {
        variant: 'ghost',
        colorScheme: 'info',
        className: 'text-(--color-info) hover:bg-(--color-info-subtle)',
      },
      {
        variant: 'soft',
        colorScheme: 'info',
        className: 'bg-(--color-info-subtle) text-(--color-info) hover:opacity-80',
      },

      // NEUTRAL COLOR SCHEME
      {
        variant: 'default',
        colorScheme: 'neutral',
        className:
          'bg-(--color-bg-subtle) text-(--color-text-primary) hover:bg-(--color-border) active:bg-(--color-border-strong)',
      },
      {
        variant: 'outline',
        colorScheme: 'neutral',
        className:
          'border-(--color-border) text-(--color-text-primary) hover:bg-(--color-bg-subtle)',
      },
      {
        variant: 'ghost',
        colorScheme: 'neutral',
        className: 'text-(--color-text-secondary) hover:bg-(--color-bg-subtle)',
      },
      {
        variant: 'soft',
        colorScheme: 'neutral',
        className: 'bg-(--color-bg-subtle) text-(--color-text-secondary) hover:bg-(--color-border)',
      },
    ],
    defaultVariants: {
      variant: 'default',
      colorScheme: 'primary',
      size: 'default',
    },
  }
);
