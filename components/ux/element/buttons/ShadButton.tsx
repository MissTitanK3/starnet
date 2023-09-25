import React from 'react';
import { Button } from '@/components/ui/button';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  styled?: React.CSSProperties;
  isActive?: boolean;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | 'active'
    | 'plain'
    | null
    | undefined;
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined;
  isDisabled?: boolean;
  role?: React.AriaRole;
  className?: string;
};

function ShadButton({
  children,
  onClick,
  styled,
  variant = 'default',
  size = 'default',
  isDisabled = false,
  isActive,
  role = 'button',
  className,
}: Props) {
  return (
    <Button
      disabled={isDisabled}
      size={size}
      className={className}
      role={role}
      type="button"
      variant={isDisabled ? 'ghost' : isActive ? 'active' : variant}
      onClick={onClick}
      style={{
        ...styled,
        width: styled?.width ? styled.width : '5rem',
      }}>
      {children}
    </Button>
  );
}

export default ShadButton;
