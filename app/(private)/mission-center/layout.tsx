'use client';

import { useEffect } from 'react';
import { useMissionStore } from '@/app-store/missions/missionStore';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { allMissions, getAllMissions } = useMissionStore();

  useEffect(() => {
    const getMissions = async () => {
      await getAllMissions();
    };
    if (allMissions === null) {
      getMissions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main
      style={{
        height: '99dvh',
        width: '99dvw',
        overflowY: 'auto',
        // overflowX: 'hidden',
      }}>
      {children}
    </main>
  );
}
