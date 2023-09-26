'use client';

import React from 'react';
import { useMissionStore } from '@/app-store/missions/missionStore';
import { FaPlus } from 'react-icons/fa';
import ShadButton from '../../element/buttons/ShadButton';
import { useModalStore } from '@/app-store/modals/modalStore';
import MissionAddIncomeModal from '../../modals/MissionAddIncome';
import MissionFinanceItem from './MissionFinanceItem';
import MissionAddExpenseModal from '../../modals/MissionAddExpense';

type Props = {};

const MissionFinances = (props: Props) => {
  const { activeTab, mission } = useMissionStore();
  const { setAddIncomeModal, addIncomeModal, setAddExpenseModal, addExpenseModal } = useModalStore();

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
          flexDirection: 'column',
          width: '48%',
          margin: '50px 0',
        }}
        className="expenses">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <h2>Expenses</h2>
          <ShadButton
            onClick={() => setAddExpenseModal(true)}
            styled={{
              width: '3rem',
            }}>
            <FaPlus />
          </ShadButton>
        </div>
        <div>
          {mission?.expense_sets?.map((income, key) => {
            return <MissionFinanceItem item={income} key={key} />;
          })}
        </div>
      </div>
      {addIncomeModal && <MissionAddIncomeModal />}
      {addExpenseModal && <MissionAddExpenseModal />}
    </main>
  );
};

export default MissionFinances;
