import * as React from 'react';
import styles from './TextArea.module.scss';

import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  styleOverride?: React.CSSProperties;
  placeHolder?: string;
  rowsCount?: number;
  colsCount?: number;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, styleOverride, placeHolder, rowsCount, colsCount, ...props }, ref) => {
    return (
      <textarea
        placeholder={placeHolder}
        rows={rowsCount}
        cols={colsCount}
        style={styleOverride}
        className={cn(`${styles.Area}`, className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
