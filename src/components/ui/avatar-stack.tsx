import * as React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { cn } from '../../lib/utils';

export interface UserAvatar {
  id?: string;
  name: string;
  avatarUrl?: string;
  fallback?: string;
}

export interface AvatarStackProps extends React.HTMLAttributes<HTMLDivElement> {
  users: UserAvatar[];
  max?: number;
  size?: 'sm' | 'md' | 'lg';
}

export function AvatarStack({
  users = [],
  max = 3,
  size = 'sm',
  className,
  ...props
}: AvatarStackProps) {
  const visibleUsers = users.slice(0, max);
  const remaining = users.length - max;

  const sizeClasses = {
    sm: 'h-6 w-6 text-[10px]',
    md: 'h-8 w-8 text-xs',
    lg: 'h-10 w-10 text-sm',
  }[size];

  return (
    <div className={cn('flex items-center -space-x-1.5 overflow-hidden', className)} {...props}>
      {visibleUsers.map((user, idx) => {
        const initials =
          user.fallback ||
          user.name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);

        return (
          <Avatar
            key={user.id || idx}
            className={cn(
              sizeClasses,
              'border-2 border-(--color-bg-surface) ring-0 shadow-sm shrink-0'
            )}
          >
            {user.avatarUrl && <AvatarImage src={user.avatarUrl} alt={user.name} />}
            <AvatarFallback className="bg-(--color-bg-subtle) text-(--color-text-secondary) font-medium">
              {initials}
            </AvatarFallback>
          </Avatar>
        );
      })}

      {remaining > 0 && (
        <div
          className={cn(
            sizeClasses,
            'flex items-center justify-center rounded-full border-2 border-(--color-bg-surface) bg-(--color-bg-subtle) text-(--color-text-tertiary) font-semibold shrink-0'
          )}
        >
          +{remaining}
        </div>
      )}
    </div>
  );
}

export default AvatarStack;
