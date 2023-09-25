'use client';

import { useAuthStore } from '@/app-store/auth/authStore';
import { useMissionStore } from '@/app-store/missions/missionStore';
import { ChatObject, alertTypes } from '@/app-store/missions/missionTypes';
import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ShadSelect from '../../element/inputs/ShadSelect';
import ShadTextArea from '../../element/inputs/ShadTextArea';
import ShadCard from '../../element/cards/ShadCard';

type Props = {};

const MissionAddChat = (props: Props) => {
  const { mission, addChatMessage } = useMissionStore();
  const { profile } = useAuthStore();

  const [newChat, setNewChat] = React.useState<ChatObject>({
    id: uuidv4(),
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

  const handleKeyDown = async (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const isShiftOrCtrlPressed = event.shiftKey || event.ctrlKey || event.altKey;
    if (isShiftOrCtrlPressed && event.code === 'Enter') {
      // ctrl + enter key
      event.preventDefault();
      setNewChat((prevState) => ({
        ...prevState,
        message: prevState.message + '\n',
      }));
      return;
    } else if (event.code === 'Enter') {
      // enter key
      event.preventDefault();
      newChat.id = uuidv4();
      await addChatMessage(newChat);
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

  return (
    <main>
      <ShadCard>
        <ShadTextArea
          inputStyleOverride={{
            width: '100%',
            height: '100%',
          }}
          id="message"
          inputId="message"
          placeHolder="Press Enter to Send..."
          changeInput={(e) => handleUpdate(e)}
          keydownInput={(e) => handleKeyDown(e)}
          value={newChat.message || ''}
          rows={5}
          cols={5}
        />
      </ShadCard>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '-0.7rem',
        }}>
        <ShadSelect
          selectDropdownTitle="Set Alert Status"
          dropdownWidth="240px"
          inputId="alertStatus"
          SelectItems={alertTypes}
          onChange={(e) => {
            handleUpdate(e);
          }}
        />
      </div>
      <hr
        style={{
          margin: '10px auto',
          width: '90%',
        }}
      />
    </main>
  );
};

export default MissionAddChat;
