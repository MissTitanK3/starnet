'use client';

import { useMissionStore } from '@/app-store/missions/missionStore';
import { ChatObject } from '@/app-store/missions/missionTypes';
import React from 'react';
import MissionChatItem from './MissionChatItem';
import MissionAddChat from './MissionAddChat';

type Props = {};

const MissionChat = (props: Props) => {
  const { mission } = useMissionStore();
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
