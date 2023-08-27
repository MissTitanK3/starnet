'use client';

import { useMissionStore } from '@/app-store/missions/missionStore';
import NeuButton from '@/app-ui/element/buttons/NeuButton';
import NeuInput from '@/app-ui/element/inputs/NeuInput';
import React from 'react';
import { FaPlus } from 'react-icons/fa';

type Props = {};

const SearchAndAdd = (props: Props) => {
  const { missionFilter, setMissionFilter } = useMissionStore();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 700,
      }}>
      {/* input for search */}
      <NeuInput
        placeholder="Search In List..."
        type="text"
        id="searchInput"
        value={missionFilter}
        changeInput={(e) => setMissionFilter(e.target.value)}
      />
      {/* Add button */}
      <NeuButton
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
