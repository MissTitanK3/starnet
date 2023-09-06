'use client';

import { useMissionStore } from '@/app-store/missions/missionStore';
import NeuButton from '@/app-ui/element/buttons/NeuButton';
import PlainButton from '@/app-ui/element/buttons/PlainButton';
import NeuCard from '@/app-ui/element/cards/NeuCard';
import NeuPopover from '@/app-ui/element/custom/NeuPopover';
import PlainPopover from '@/app-ui/element/custom/PlainPopover';
import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';

type Props = {};

const MissionGroups = (props: Props) => {
  const { mission, getMemberProfile, getAttachedEvents, activeTab } = useMissionStore();
  if (activeTab !== 'groups') return null;
  return (
    <div>
      <NeuCard
        activeHover={false}
        cardStyleOverride={{
          width: '95%',
          margin: '50px auto',
        }}>
        <div
          className="header"
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <NeuPopover orientation="left">
            The ’Command’ group and Event Leadership has permissions to manage the mission.
          </NeuPopover>
          <NeuButton
            onClick={() => {
              console.log('clicked');
            }}
            styled={{
              maxWidth: '150px',
              height: '100%',
              padding: '0.35rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            Create Support
          </NeuButton>
        </div>
      </NeuCard>
    </div>
  );
};

export default MissionGroups;
