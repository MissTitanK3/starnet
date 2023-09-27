'use client';

import { useMissionStore } from '@/app-store/missions/missionStore';
import { ChatObject } from '@/app-store/missions/missionTypes';
import React from 'react';
import MissionChatItem from './MissionChatItem';
import MissionAddChat from './MissionAddChat';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

type Props = {};

const MissionChat = (props: Props) => {
  const { mission, updateChat, missionChats } = useMissionStore();
  const supabase = createClientComponentClient();

  // TODO: Isolate chats in store Sooner than later
  supabase
    .channel('custom-filter-chat-channel')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'missions', filter: 'column_name=eq.chats' },
      (payload) => {
        updateChat(mission.id);
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
        {missionChats
          ?.filter((c) => c.hidden !== true)
          ?.map(async (chat: ChatObject, key) => {
            return <MissionChatItem key={`chat-item-${key}`} chat={chat} chatKey={key} />;
          })}
      </div>
    </main>
  );
};

export default MissionChat;
