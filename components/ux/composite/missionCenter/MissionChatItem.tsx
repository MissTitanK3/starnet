'use client';

import { AuthData } from '@/app-store/auth/authTypes';
import { useMissionStore } from '@/app-store/missions/missionStore';
import { ChatObject } from '@/app-store/missions/missionTypes';
import { getChatColor } from '@/app-store/utils/getChatColor';
import { getLoggedAndExpire } from '@/app-store/utils/getTimeFormat';
import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import NeuCard from '../../element/cards/NeuCard';
import NeuButton from '../../element/buttons/NeuButton';
import ShadCard from '../../element/cards/ShadCard';
import ShadButton from '../../element/buttons/ShadButton';

type Props = {
  chat: ChatObject;
  chatKey: number;
};

const MissionChatItem = ({ chat, chatKey }: Props) => {
  const { getMemberProfile, archiveChatMessage } = useMissionStore();
  const [senderData, setSenderData] = useState<AuthData | null>(null);
  const [awaitingDelete, setAwaitingDelete] = useState<boolean>(false);
  const { timeFormattedDate } = getLoggedAndExpire({ date: chat?.created_at.toString() || '' });

  useEffect(() => {
    const awaitSender = async () => {
      const data: any = await getMemberProfile(chat.sender);
      setSenderData(data?.[0]);
    };
    if (chat.sender) {
      awaitSender();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chat.sender]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <ShadCard
        variant="noHover"
        styleOverride={{
          border: chat.origin !== 'mission' ? '3px solid #594b16' : 'unset',
          minHeight: '100px',
          width: '90%',
        }}
        key={`chat-object-${chatKey}`}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: '15px',
          }}>
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
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}>
            <ShadButton
              onClick={async () => {
                setAwaitingDelete(true);
                await archiveChatMessage(chat.id!);
                setAwaitingDelete(false);
              }}
              variant="destructive"
              styled={{
                width: '25px',
                height: '25px',
                padding: '5px 0',
              }}>
              {awaitingDelete ? '...' : <FaTrashAlt color="#7c0101" size={10} />}
            </ShadButton>
          </div>
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
        <span
          style={{
            margin: '15px 0',
            whiteSpace: 'pre-wrap',
          }}>
          {chat?.message}
        </span>
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
        <span>{chat.origin === 'mission' ? 'Origin: Mission' : `Origin: Event #${chat.event_link_id}`}</span>
        <span>{senderData?.bravo_billet?.label}</span>
      </ShadCard>
    </div>
  );
};

export default MissionChatItem;
