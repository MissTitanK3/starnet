'use client';

import { useMissionStore } from '@/app-store/missions/missionStore';
import { ChatObject } from '@/app-store/missions/missionTypes';
import React from 'react';
import MissionChatItem from './MissionChatItem';
import MissionAddChat from './MissionAddChat';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

type Props = {};

const MissionChat = (props: Props) => {
  const { mission, setMission } = useMissionStore();
  const supabase = createClientComponentClient();

  // TODO: Isolate chats in store
  supabase
    .channel('custom-filter-channel')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'missions', filter: 'column_name=eq.chats' },
      (payload) => {
        console.log('Change received!', payload);
        setMission(mission.id);
      },
    )
    .subscribe();

  return (
    <main
      style={{
        height: '100%',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <MissionAddChat />
      <div
        style={{
          overflowY: 'auto',
          height: '100%',
        }}>
        {mission?.chats
          ?.filter((c) => c.hidden !== true)
          ?.map(async (chat: ChatObject, key) => {
            return <MissionChatItem key={`chat-item-${key}`} chat={chat} chatKey={key} />;
          })}
      </div>
    </main>
  );
};

export default MissionChat;
