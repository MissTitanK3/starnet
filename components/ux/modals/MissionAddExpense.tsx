import React, { useState } from 'react';
import { ExpenseSet, Mission } from '@/app-store/missions/missionTypes';
import { useModalStore } from '@/app-store/modals/modalStore';
import { useMissionStore } from '@/app-store/missions/missionStore';
import ShadCard from '../element/cards/ShadCard';
import ShadButton from '../element/buttons/ShadButton';
import ShadInput from '../element/inputs/ShadInput';
import Overlay from '../element/overlays/Overlay';
import { useAuthStore } from '@/app-store/auth/authStore';
import { generateCode } from '@/app-store/utils/generateCode';

type Props = {};

const MissionAddExpenseModal = (props: Props) => {
  const { mission, updateMission, addExpense } = useMissionStore();
  const { profile } = useAuthStore();
  const [expense, setExpense] = useState<ExpenseSet>({} as ExpenseSet);
  const { setAddExpenseModal } = useModalStore();

  const handleUpdate = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | undefined>,
  ) => {
    setExpense((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClose = () => {
    setAddExpenseModal(false);
  };

  const handleAddExpense = () => {
    const newExpense: ExpenseSet = {
      id: generateCode(2, 8),
      type: 'expense',
      created_at: new Date(),
      contributer: profile?.id,
      expense_amount: expense.expense_amount,
      expense_label: expense.expense_label,
      has_been_paid: false,
    };
    addExpense(newExpense);
    handleClose();
  };

  return (
    <Overlay>
      <ShadCard
        variant="solidNoHover"
        footerChildren={
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '50%',
              margin: '0 auto',
            }}>
            <ShadButton
              variant="destructive"
              onClick={() => handleClose()}
              styled={{
                width: '100px',
              }}>
              Cancel
            </ShadButton>
            <ShadButton
              onClick={() => handleAddExpense()}
              styled={{
                width: '100px',
              }}>
              Save
            </ShadButton>
          </div>
        }
        styleOverride={{
          height: '40dvh',
          width: '30dvw',
          overflowY: 'auto',
        }}>
        <h2>Add Expense</h2>
        <ShadCard cardTitle="Add Label">
          <ShadInput
            id="memberRole"
            inputId="expense_label"
            type="text"
            value={expense?.expense_label}
            changeInput={(e) => handleUpdate(e)}
          />
        </ShadCard>
        <ShadCard cardTitle="Add Amount">
          <ShadInput
            defaultValue={0}
            id="memberRole"
            inputId="expense_amount"
            type="number"
            value={expense?.expense_amount}
            changeInput={(e) => handleUpdate(e)}
          />
        </ShadCard>
      </ShadCard>
    </Overlay>
  );
};

export default MissionAddExpenseModal;
