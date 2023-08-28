'use client';

import { useMissionStore } from '@/app-store/missions/missionStore';
import { useModalStore } from '@/app-store/modals/modalStore';
import NeuButton from '@/app-ui/element/buttons/NeuButton';
import NeuInput from '@/app-ui/element/inputs/NeuInput';
import React from 'react';
import { FaPlus } from 'react-icons/fa';

type Props = {};

const SearchAndAdd = (props: Props) => {
  const { missionFilter, setMissionFilter } = useMissionStore();
  const { setNewMissionModal } = useModalStore();
  const handleAddMission = () => {
    console.log('add mission');
    setNewMissionModal(true);
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 700,
      }}>
      <NeuInput
        cardStyleOverride={{
          width: '100%',
          height: '70%',
        }}
        placeholder="Search In List..."
        type="text"
        id="searchInput"
        value={missionFilter}
        changeInput={(e) => setMissionFilter(e.target.value)}
      />
      <NeuButton
        onClick={() => handleAddMission()}
        styled={{
          width: 250,
          height: '3rem',
        }}>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FaPlus />
          &nbsp;New Mission
        </span>
      </NeuButton>
    </div>
  );
};

export default SearchAndAdd;
