import React from 'react';
import styles from './Button.module.scss';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  styled?: React.CSSProperties;
  activeHover?: boolean;
  isActive?: boolean;
  variant?: 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info' | 'disabled';
  isDisabled?: boolean;
};

function NeuButton({
  children,
  onClick,
  styled,
  activeHover = true,
  isActive = false,
  variant = 'primary',
  isDisabled = false,
}: Props) {
  let classes = '';
  if (activeHover) {
    classes += ' ' + styles.neumorphicDarkButton;
  } else {
    classes += ' ' + styles.neumorphicDarkButtonNoHover;
  }
  if (isActive) {
    classes += ' ' + styles.neumorphicDarkButtonActive;
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
    case 'disabled':
      classes += ' ' + styles.disabled;
      break;
    default:
      classes += ' ' + styles.primary;
      break;
  }

  return (
    <div
      style={styled}
      onClick={!isDisabled ? onClick : () => console.log('Information Incomplete')}
      className={classes}>
      {children}
    </div>
  );
}

export default NeuButton;
