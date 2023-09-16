'use client';

import React from 'react';
import styles from './Card.module.scss';
import { useRouter } from 'next/navigation';

type Props = {
  children: React.ReactNode;
  route?: string;
  cardStyleOverride?: React.CSSProperties;
  activeHover?: boolean;
  minHeightOverride?: string;
};

function NeuCard({ children, route, cardStyleOverride, activeHover = true, minHeightOverride }: Props) {
  const router = useRouter();
  return (
    <div
      style={{
        ...cardStyleOverride,
        height: '100%',
        minHeight: minHeightOverride,
      }}
      onClick={() => route && router.push(route)}
      className={activeHover ? styles.neumorphicDarkCard : styles.neumorphicDarkCardNohover}>
      {children}
    </div>
  );
}

export default NeuCard;
