'use client';

import { useAuthStore } from '@/app-store/auth/authStore';
import { useMissionStore } from '@/app-store/missions/missionStore';
import { getVariableRankImageDetails } from '@/app-store/utils/getRankImageDetails';
import { getLoggedAndExpire } from '@/app-store/utils/getTimeFormat';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import NeuButton from '../../element/buttons/NeuButton';
import ShadButton from '../../element/buttons/ShadButton';
import { useModalStore } from '@/app-store/modals/modalStore';
import MissionAddIncomeModal from '../../modals/MissionAddIncome';
import ShadCard from '../../element/cards/ShadCard';
import MissionFinanceItem from './MissionFinanceItem';

type Props = {};

const MissionFinances = (props: Props) => {
  const { activeTab, mission } = useMissionStore();
  const { setAddIncomeModal, addIncomeModal } = useModalStore();

  if (activeTab !== 'finances') return null;

  return (
    <main
      style={{
        overflowY: 'auto',
        height: '63dvh',
        display: 'flex',
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '48%',
          margin: '50px 0',
        }}
        className="deposits">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <h2>Deposits</h2>
          <ShadButton
            onClick={() => setAddIncomeModal(true)}
            styled={{
              width: '3rem',
            }}>
            <FaPlus />
          </ShadButton>
        </div>
        <div>
          {mission?.income_sets?.map((income, key) => {
            return <MissionFinanceItem item={income} key={key} />;
          })}
        </div>
      </div>
      <div
        style={{
          width: '2px',
          margin: '0 10px',
          borderRight: '1px solid #575757',
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '48%',
          margin: '50px 0',
        }}
        className="expenses">
        <h2>Expenses</h2>
        <ShadButton
          styled={{
            width: '3rem',
          }}>
          <FaPlus />
        </ShadButton>
      </div>
      {addIncomeModal && <MissionAddIncomeModal />}
    </main>
  );
};

export default MissionFinances;
