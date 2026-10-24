import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import { type LucideIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '../../lib/utils';

import { buttonVariants } from './button-variants';

export interface ButtonProps
  extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  leadingIcon?: LucideIcon;
  trailingIcon?: LucideIcon;
  iconOnly?: boolean;
  isLoading?: boolean;
}

/**
 * @summary A custom button component that supports various variants, sizes, and color schemes.
 * @param {ButtonProps} props
 * @param {string} props.variant - Variant of the button
 * @param {string} props.size - Size of the button
 * @param {string} props.colorScheme - Color scheme of the button
 * @param {boolean} props.asChild - Whether the button is used as a child element
 * @param {LucideIcon} props.leadingIcon - Icon to show on the left side (leading)
 * @param {LucideIcon} props.trailingIcon - Icon to show on the right side (trailing)
 * @param {boolean} props.iconOnly - Whether the button only contains an icon (no text)
 * @param {boolean} props.isLoading - Whether the button is in a loading state
 * @param {React.Ref<HTMLButtonElement>} ref
 * @returns {React.ReactElement}
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      colorScheme = 'primary',
      asChild = false,
      leadingIcon: LeadingIcon,
      trailingIcon: TrailingIcon,
      iconOnly = false,
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    // Determine icon size based on button size
    const iconSize = {
      sm: 'w-4 h-4',
      default: 'w-5 h-5',
      lg: 'w-6 h-6',
      icon: 'w-5 h-5',
    }[size || 'default'];

    const content = (
      <>
        {isLoading && (
          <svg
            className={cn('animate-spin', iconSize)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && LeadingIcon && <LeadingIcon className={iconSize} />}
        {!iconOnly && children}
        {!isLoading && TrailingIcon && <TrailingIcon className={iconSize} />}
      </>
    );

    return (
      <Comp
        ref={ref}
        data-slot="button"
        data-variant={variant}
        data-size={size}
        data-color-scheme={colorScheme}
        className={cn(buttonVariants({ variant, size, colorScheme, className }))}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button };
