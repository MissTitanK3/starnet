'use client';

import React from 'react';
import styles from './Card.module.scss';
import { useRouter } from 'next/navigation';

type Props = {
  children: React.ReactNode;
  route?: string;
  cardStyleOverride?: React.CSSProperties;
};

function NeuCard({ children, route, cardStyleOverride }: Props) {
  const router = useRouter();
  return (
    <div style={cardStyleOverride} onClick={() => route && router.push(route)} className={styles.neumorphicDarkCard}>
      {children}
    </div>
  );
}

export default NeuCard;
