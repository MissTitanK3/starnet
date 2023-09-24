'use client';

import { useMissionStore } from '@/app-store/missions/missionStore';
import { useModalStore } from '@/app-store/modals/modalStore';
import React from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import ShadButton from '../../element/buttons/ShadButton';
import ShadInput from '../../element/inputs/ShadInput';
import ShadCard from '../../element/cards/ShadCard';

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
      <ShadCard>
        <ShadInput
          inputId="missionFilter"
          id="missionFilter"
          type="text"
          value={missionFilter}
          placeHolder="Search In List..."
          changeInput={(e) => setMissionFilter(e.target.value)}
          adornment="left"
          adornmentIcon={<FaSearch />}
          inputStyleOverride={{
            width: '350px',
          }}
        />
      </ShadCard>
      <ShadButton
        onClick={() => handleAddMission()}
        styled={{
          width: 160,
          height: '3rem',
          margin: 'auto',
        }}>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
          }}>
          <FaPlus /> &nbsp;&nbsp;New Mission
        </span>
      </ShadButton>
    </div>
  );
};

export default SearchAndAdd;
