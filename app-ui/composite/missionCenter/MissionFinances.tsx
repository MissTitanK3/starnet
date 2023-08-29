'use client';

import { useAuthStore } from '@/app-store/auth/authStore';
import { useMissionStore } from '@/app-store/missions/missionStore';
import { getVariableRankImageDetails } from '@/app-store/utils/getRankImageDetails';
import { getLoggedAndExpire } from '@/app-store/utils/getTimeFormat';
import NeuButton from '@/app-ui/element/buttons/NeuButton';
import NeuCard from '@/app-ui/element/cards/NeuCard';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';

type Props = {};

const MissionFinances = (props: Props) => {
  const { mission, getCreatorProfile, getAttachedEvents, activeTab } = useMissionStore();
  const { formattedDate } = getLoggedAndExpire({ date: mission?.start_date || '' });
  const [missionCreator, setMissionCreator] = useState<any>(null);
  const [eventData, setEventData] = useState<any>(null);
  const rankImageDetails = getVariableRankImageDetails(missionCreator?.network_rank?.grade);

  // useEffect(() => {
  //   if (mission?.creator) {
  //     const awaitCreator = async () => {
  //       const data: any = await getCreatorProfile(mission?.creator);
  //       setMissionCreator(data?.[0]);
  //     };
  //     awaitCreator();
  //   }
  //   if (mission?.event_id) {
  //     const awaitEvent = async () => {
  //       const data: any = await getAttachedEvents(mission?.event_id);
  //       setEventData(data?.[0]);
  //     };
  //     awaitEvent();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [mission?.creator, mission?.event_id]);

  if (activeTab !== 'finances') return null;

  return (
    <main
      style={{
        overflowY: 'auto',
        height: '63dvh',
        display: 'flex',
      }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '48%',
          margin: '50px 0',
        }}
        className="deposits">
        <h2>Deposits</h2>
        <NeuButton
          styled={{
            width: '3rem',
          }}>
          <FaPlus />
        </NeuButton>
      </div>
      <div
        style={{
          // height: '75dvh',
          width: '2px',
          margin: '0 10px',
          borderRight: '1px solid #575757',
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '48%',
          margin: '50px 0',
        }}
        className="expenses">
        <h2>Expenses</h2>
        <NeuButton
          styled={{
            width: '3rem',
          }}>
          <FaPlus />
        </NeuButton>
      </div>
    </main>
  );
};

export default MissionFinances;
