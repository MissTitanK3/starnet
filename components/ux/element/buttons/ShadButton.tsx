import React from 'react';
import { Button } from '@/components/ui/button';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  styled?: React.CSSProperties;
  isActive?: boolean;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | null | undefined;
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined;
  isDisabled?: boolean;
};

function ShadButton({ children, onClick, styled, variant = 'default', size = 'default', isDisabled = false }: Props) {
  return (
    <Button
      disabled={isDisabled}
      size={size}
      variant={isDisabled ? 'ghost' : variant}
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
