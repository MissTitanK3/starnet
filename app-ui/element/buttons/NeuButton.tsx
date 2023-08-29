import React from 'react';
import styles from './Button.module.scss';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  styled?: React.CSSProperties;
  activeHover?: boolean;
  isActive?: boolean;
};

function NeuButton({ children, onClick, styled, activeHover = true, isActive = false }: Props) {
  let classes = '';
  if (activeHover) {
    // classes.push(styles.neumorphicDarkButton);
    classes += ' ' + styles.neumorphicDarkButton;
  } else {
    // classes.push(styles.neumorphicDarkButtonNoHover);
    classes += ' ' + styles.neumorphicDarkButtonNoHover;
  }
  if (isActive) {
    // classes.push(styles.neumorphicDarkButtonActive);
    classes += ' ' + styles.neumorphicDarkButtonActive;
  }
  return (
    <div style={styled} onClick={onClick} className={classes}>
      {children}
    </div>
  );
}

export default NeuButton;
