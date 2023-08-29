'use client';

import { useAuthStore } from '@/app-store/auth/authStore';
import { useMissionStore } from '@/app-store/missions/missionStore';
import { ChatObject } from '@/app-store/missions/missionTypes';
import { getChatColor } from '@/app-store/utils/getChatColor';
import NeuCard from '@/app-ui/element/cards/NeuCard';
import NeuDropdown from '@/app-ui/element/inputs/NeuDropdown';
import NeuInput from '@/app-ui/element/inputs/NeuInput';
import NeuTextArea from '@/app-ui/element/inputs/NeuTextArea';
import React, { Suspense, useEffect } from 'react';
import MissionChatItem from './MissionChatItem';
import LoadingSpinner from '@/app-ui/element/custom/LoadingSpinner';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

type Props = {};

const MissionChat = (props: Props) => {
  const { mission, addChatMessage, getMemberProfile, setMission } = useMissionStore();
  const { profile, isAuthenticated } = useAuthStore();
  const supabaseClient = createClientComponentClient();

  const [newChat, setNewChat] = React.useState<ChatObject>({
    sender: profile.id,
    message: '',
    created_at: new Date().toISOString(),
    hidden: false,
    mission_id: mission?.id,
    event_link_id: mission?.event_id || undefined,
    origin: 'mission',
    alertStatus: 'General Alert',
  });

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setNewChat((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  if (isAuthenticated) {
    supabaseClient
      .channel('mission-channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'missions' }, (payload) => {
        setMission(mission.id);
      })
      .subscribe();
  }

  const handleKeyDown = async (event: any) => {
    const isShiftOrCtrlPressed = event.shiftKey || event.ctrlKey;
    if (isShiftOrCtrlPressed && event.keyCode === 13) {
      // ctrl + enter key
      event.preventDefault();
      setNewChat((prevState) => ({
        ...prevState,
        message: prevState.message + '\n',
      }));
      return;
    } else if (event.keyCode === 13) {
      // enter key
      event.preventDefault();
      await addChatMessage(newChat, mission?.id?.toString());
      setNewChat({
        sender: profile.id,
        message: '',
        created_at: new Date().toISOString(),
        hidden: false,
        mission_id: mission?.id,
        event_link_id: mission?.event_id || undefined,
        origin: 'mission',
        alertStatus: 'General Alert',
      });
    }
  };

  useEffect(() => {
    setNewChat({
      sender: profile.id,
      message: '',
      created_at: new Date().toISOString(),
      hidden: false,
      mission_id: mission?.id,
      event_link_id: mission?.event_id || undefined,
      origin: 'mission',
      alertStatus: 'General Alert',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log('new chat', newChat);

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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          // height: '100%',
          position: 'relative',
        }}>
        <NeuDropdown
          cardStyleOverride={{
            width: '90%',
            height: '3rem',
            marginBottom: '-0.3rem',
            zIndex: 100,
          }}
          id="alertStatus"
          selectOptions={['General Alert', 'Contact Aquired', 'Contact Imminent', 'Contact Engaging', 'Avoid Contact']}
          value={newChat.alertStatus || 'General Alert'}
          changeInput={(e) => {
            handleUpdate(e);
          }}
        />
        <NeuTextArea
          inputStyleOverride={{
            width: '100%',
            height: '100%',
          }}
          cardStyleOverride={{
            width: '90%',
            minHeight: '3rem',
            zIndex: 9,
          }}
          id="message"
          placeholder="Mission Description"
          changeInput={(e) => handleUpdate(e)}
          value={newChat.message || ''}
          rowsCount={5}
          keyDownAction={handleKeyDown}
        />
        <span
          style={{
            fontSize: '0.8rem',
            color: '#575757',
            textAlign: 'right',
            width: '80%',
            marginTop: '-15px',
          }}>
          Press Enter To Send
        </span>
      </div>
      <hr
        style={{
          margin: '10px auto',
          width: '90%',
        }}
      />
      <Suspense fallback={<LoadingSpinner />}>
        {mission?.chats?.map(async (chat: ChatObject, key) => {
          const senderData = await getMemberProfile(chat.sender);
          return <MissionChatItem chat={chat} key={key} />;
        })}
      </Suspense>
    </main>
  );
};

export default MissionChat;
