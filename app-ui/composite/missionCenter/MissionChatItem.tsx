'use client';

import { AuthData, AuthUser } from '@/app-store/auth/authTypes';
import { useMissionStore } from '@/app-store/missions/missionStore';
import { ChatObject } from '@/app-store/missions/missionTypes';
import { getChatColor } from '@/app-store/utils/getChatColor';
import { getLoggedAndExpire } from '@/app-store/utils/getTimeFormat';
import NeuCard from '@/app-ui/element/cards/NeuCard';
import LoadingSpinner from '@/app-ui/element/custom/LoadingSpinner';
import React, { Suspense, use, useEffect, useState } from 'react';

type Props = {
  chat: ChatObject;
  key: number;
};

const MissionChatItem = ({ chat, key }: Props) => {
  const { getMemberProfile } = useMissionStore();
  const [senderData, setSenderData] = useState<AuthData | null>(null);
  const { timeFormattedDate } = getLoggedAndExpire({ date: chat?.created_at.toString() || '' });

  useEffect(() => {
    const awaitSender = async () => {
      const data: any = await getMemberProfile(chat.sender);
      setSenderData(data?.[0]);
    };
    awaitSender();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log('senderData', senderData);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <NeuCard activeHover={false} key={`chat-object-${key}`}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <span>
              {senderData?.network_rank?.abbreviation} {senderData?.in_game_name?.toUpperCase()}
            </span>
            <span
              style={{
                fontSize: '0.5rem',
                margin: '0 0 0 0',
              }}>
              {timeFormattedDate}
            </span>
            <div></div>
          </div>
          <div
            className="bar"
            style={{
              width: '100%',
              height: '2px',
              backgroundColor: getChatColor(chat?.alertStatus),
              boxShadow: `0px 0px 5px ${getChatColor(chat?.alertStatus)}`,
              margin: '2px auto',
            }}
          />
          <span>{chat?.message}</span>
        </NeuCard>
      </div>
    </Suspense>
  );
};

export default MissionChatItem;
