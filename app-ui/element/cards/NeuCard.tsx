'use client';

import React from 'react';
import styles from './Card.module.scss';
import { useRouter } from 'next/navigation';

type Props = {
  children: React.ReactNode;
  route?: string;
  styleOverride?: React.CSSProperties;
};

function NeuCard({ children, route, styleOverride }: Props) {
  const router = useRouter();
  return (
    <div style={styleOverride} onClick={() => route && router.push(route)} className={styles.neumorphicDarkCard}>
      {children}
    </div>
  );
}

export default NeuCard;
