'use client';

import React from 'react';
import styles from './Card.module.scss';
import { useRouter } from 'next/navigation';

type Props = {
  children: React.ReactNode;
  route?: string;
};

function NeumorphicCard({ children, route }: Props) {
  const router = useRouter();
  return (
    <div onClick={() => route && router.push(route)} className={styles.neumorphicDarkCard}>
      {children}
    </div>
  );
}

export default NeumorphicCard;
