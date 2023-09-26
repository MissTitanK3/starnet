import React from 'react';
import { useMissionStore } from '@/app-store/missions/missionStore';
import { useModalStore } from '@/app-store/modals/modalStore';
import ShadCard from '../element/cards/ShadCard';
import ShadButton from '../element/buttons/ShadButton';

type Props = {
  cardOverride?: React.CSSProperties;
  close: () => void;
  type: 'income' | 'expense';
  item: any;
};

const MissionFinanceActions = ({ cardOverride, close, type, item }: Props) => {
  const { removeIncome, removeExpense, toggleExpensePaid, toggleIncomePaid } = useMissionStore();
  const handleMarkAsPaid = () => {
    if (type === 'income') {
      toggleIncomePaid(item.id as string);
    } else {
      toggleExpensePaid(item.id as string);
    }
    close();
  };
  const handleRemove = async () => {
    if (type === 'income') {
      removeIncome(item.id as string);
    } else {
      removeExpense(item.id as string);
    }
    close();
  };
  return (
    <ShadCard
      variant="solidNoHover"
      styleOverride={{
        ...cardOverride,
        minHeight: '40px',
        width: '200px',
        position: 'absolute',
        top: '0px',
        left: '40px',
        zIndex: 1000,
      }}>
      <ShadButton
        styled={{
          width: '100%',
          margin: '0 auto',
        }}
        onClick={() => handleMarkAsPaid()}>
        Make As Paid
      </ShadButton>
      <ShadButton
        styled={{
          width: '100%',
          margin: '15px auto 0 auto',
        }}
        variant="destructive"
        onClick={() => handleRemove()}>
        Remove {type === 'income' ? 'Income' : 'Expense'}
      </ShadButton>
    </ShadCard>
  );
};

export default MissionFinanceActions;
