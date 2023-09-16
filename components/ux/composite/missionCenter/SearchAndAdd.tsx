'use client';

import { useMissionStore } from '@/app-store/missions/missionStore';
import { useModalStore } from '@/app-store/modals/modalStore';
import React from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import NeuInput from '../../element/inputs/NeuInput';
import NeuButton from '../../element/buttons/NeuButton';

type Props = {};

const SearchAndAdd = (props: Props) => {
  const { missionFilter, setMissionFilter } = useMissionStore();
  const { setNewMissionModal } = useModalStore();
  const handleAddMission = () => {
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
        inputStyleOverride={{
          width: '100%',
          height: '100%',
          fontSize: '1.5rem',
        }}
        placeholder="Search In List..."
        type="text"
        id="searchInput"
        value={missionFilter}
        changeInput={(e) => setMissionFilter(e.target.value)}
        adornment="left"
        adornmentIcon={<FaSearch />}
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
