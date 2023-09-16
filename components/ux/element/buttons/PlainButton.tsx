import React from 'react';
import styles from './Button.module.scss';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  styled?: React.CSSProperties;
  activeHover?: boolean;
  isActive?: boolean;
  variant?: 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info';
};

function PlainButton({ children, onClick, styled, activeHover = true, isActive = false, variant }: Props) {
  let classes = 'plainButton';
  if (activeHover) {
    // classes += ' ' + styles.neumorphicDarkButton;
  } else {
    // classes += ' ' + styles.neumorphicDarkButtonNoHover;
  }
  if (isActive) {
    // classes += ' ' + styles.neumorphicDarkButtonActive;
  }

  switch (variant) {
    case 'primary':
      classes += ' ' + styles.primary;
      break;
    case 'secondary':
      classes += ' ' + styles.secondary;
      break;
    case 'error':
      classes += ' ' + styles.error;
      break;
    case 'success':
      classes += ' ' + styles.success;
      break;
    case 'warning':
      classes += ' ' + styles.warning;
      break;
    case 'info':
      classes += ' ' + styles.info;
      break;
    default:
      classes += ' ' + styles.primary;
      break;
  }

  return (
    <div style={styled} onClick={onClick} className={classes}>
      {children}
    </div>
  );
}

export default PlainButton;
