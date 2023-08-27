import React from 'react';
import styles from './Button.module.scss';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  styled?: React.CSSProperties;
};

function NeuButton({ children, onClick, styled }: Props) {
  return (
    <div style={styled} onClick={onClick} className={styles.neumorphicDarkButton}>
      {children}
    </div>
  );
}

export default NeuButton;
